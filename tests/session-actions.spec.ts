import { test, expect, type Page } from '@playwright/test'

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function runCalc(page: Page, expr: string): Promise<void> {
  await page.locator('#input').fill(expr)
  await page.locator('#input').press('Enter')
}

// ── Layout ────────────────────────────────────────────────────────────────────

test('Clear and Reset buttons are in the shortcuts bar', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  const shortcuts = page.locator('#shortcuts')
  await expect(shortcuts.locator('#clear-btn')).toBeVisible()
  await expect(shortcuts.locator('#reset-btn')).toBeVisible()
})

test('Clear and Reset appear after the calculation shortcuts', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  const items = page.locator('#shortcuts > *')
  const count = await items.count()
  const secondLast = await items.nth(count - 2).getAttribute('id')
  const last = await items.nth(count - 1).getAttribute('id')

  expect(secondLast).toBe('clear-btn')
  expect(last).toBe('reset-btn')
})

// ── Clear button ──────────────────────────────────────────────────────────────

test('Clear button shows a confirmation popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')
  await page.locator('#clear-btn').click()

  await expect(page.locator('#confirm-popup')).toHaveClass(/visible/)
})

test('Clear button: cancelling leaves output and session intact', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')
  await page.locator('#clear-btn').click()
  await page.locator('#confirm-popup-cancel').click()

  await expect(page.locator('.entry')).toHaveCount(1)
  const sessions = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('calcite-sessions') ?? '[]')
  )
  expect(sessions[0].inputs).toHaveLength(1)
})

test('Clear button: confirming removes output and session history', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '2 + 2')
  await runCalc(page, '3 * 3')
  await page.locator('#clear-btn').click()
  await page.locator('#confirm-popup-ok').click()

  await expect(page.locator('.entry')).toHaveCount(0)
  const sessions = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('calcite-sessions') ?? '[]')
  )
  expect(sessions[0].inputs).toHaveLength(0)
})

test('Clear button: confirming keeps the current tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 km to m')
  const tabsBefore = await page.locator('#tabs-scroll .tab').count()

  await page.locator('#clear-btn').click()
  await page.locator('#confirm-popup-ok').click()

  await expect(page.locator('#tabs-scroll .tab')).toHaveCount(tabsBefore)
})

// ── Reset button ──────────────────────────────────────────────────────────────

test('Reset button shows a confirmation popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')
  await page.locator('#reset-btn').click()

  await expect(page.locator('#confirm-popup')).toHaveClass(/visible/)
})

test('Reset button: cancelling leaves output intact', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '5 * 5')
  await page.locator('#reset-btn').click()
  await page.locator('#confirm-popup-cancel').click()

  await expect(page.locator('.entry')).toHaveCount(1)
})

test('Reset button: confirming clears output and starts a new session', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '10 / 2')
  const sessionIdBefore = await page.locator('#session-select').inputValue()

  await page.locator('#reset-btn').click()
  await page.locator('#confirm-popup-ok').click()

  await expect(page.locator('.entry')).toHaveCount(0)
  const sessionIdAfter = await page.locator('#session-select').inputValue()
  expect(sessionIdAfter).not.toBe(sessionIdBefore)
})

test('Reset button: confirming saves old session and starts a new empty one', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'let x = 5')
  await page.locator('#reset-btn').click()
  await page.locator('#confirm-popup-ok').click()

  const sessions = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('calcite-sessions') ?? '[]')
  )
  // Old session is preserved, new empty session is added
  expect(sessions).toHaveLength(2)
  const current = sessions.find((s: { inputs: string[] }) => s.inputs.length === 0)
  const previous = sessions.find((s: { inputs: string[] }) => s.inputs.length > 0)
  expect(current).toBeDefined()
  expect(previous?.inputs).toContain('let x = 5')
})
