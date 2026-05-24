import { test, expect, type Page } from '@playwright/test'

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function runCalc(page: Page, expr: string): Promise<void> {
  await page.locator('#input').fill(expr)
  await page.locator('#input').press('Enter')
}

async function openScriptsPopup(page: Page): Promise<void> {
  await page.locator('#scripts-panel-btn').click()
  await expect(page.locator('#scripts-popup')).toBeVisible()
}

async function downloadExport(page: Page): Promise<string> {
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#scripts-download-btn').click(),
  ])
  const path = await download.path()
  const { readFileSync } = await import('fs')
  return readFileSync(path!, 'utf8')
}

// ── File content ──────────────────────────────────────────────────────────────

test('multiple definitions are separated by newlines in the exported file', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'let a = 10 m')
  await runCalc(page, 'let b = 20 m')
  await runCalc(page, 'fn total(x: Length, y: Length) = x + y')
  await openScriptsPopup(page)

  const content = await downloadExport(page)
  const lines = content.split('\n')
  expect(lines).toContain('let a = 10 m')
  expect(lines).toContain('let b = 20 m')
  expect(lines).toContain('fn total(x: Length, y: Length) = x + y')
  expect(lines).toHaveLength(3)
})

test('definitions are exported in the order they were entered', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'let first = 1 m')
  await runCalc(page, 'let second = 2 m')
  await runCalc(page, 'let third = 3 m')
  await openScriptsPopup(page)

  const content = await downloadExport(page)
  const lines = content.split('\n')
  expect(lines.indexOf('let first = 1 m')).toBeLessThan(lines.indexOf('let second = 2 m'))
  expect(lines.indexOf('let second = 2 m')).toBeLessThan(lines.indexOf('let third = 3 m'))
})

test('non-definition expressions between definitions are omitted', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'let speed = 60 km/h')
  await runCalc(page, '100 km / speed')
  await runCalc(page, 'let duration = 100 km / speed')
  await openScriptsPopup(page)

  const content = await downloadExport(page)
  const lines = content.split('\n')
  expect(lines).toContain('let speed = 60 km/h')
  expect(lines).toContain('let duration = 100 km / speed')
  expect(lines).not.toContain('100 km / speed')
  expect(lines).toHaveLength(2)
})

// ── Filename ──────────────────────────────────────────────────────────────────

test('exported filename uses the slug of a renamed session label', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  const label = page.locator('#tabs-scroll .tab.active .tab-label')
  await label.dblclick()
  const editor = page.locator('#tabs-scroll .tab-rename-input')
  await editor.fill('My Export Test')
  await editor.press('Enter')

  await runCalc(page, 'let x = 5 m')
  await openScriptsPopup(page)

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#scripts-download-btn').click(),
  ])
  expect(download.suggestedFilename()).toBe('my-export-test.nbt')
})

// ── Clear interaction ─────────────────────────────────────────────────────────

test('definitions entered before a clear are not exported; post-clear ones are', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'let before_clear = 99 m')

  await page.locator('#clear-btn').click()
  await page.locator('#confirm-popup-ok').click()
  await expect(page.locator('.entry')).toHaveCount(0)

  await runCalc(page, 'let after_clear = 42 m')
  await openScriptsPopup(page)

  const content = await downloadExport(page)
  expect(content).toContain('let after_clear = 42 m')
  expect(content).not.toContain('let before_clear = 99 m')
})

// ── Page refresh ──────────────────────────────────────────────────────────────

test('definitions are still exported correctly after a page refresh', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'let mass = 75 kg')
  await runCalc(page, 'fn bmi(h: Length) = mass / h^2')

  await page.reload()
  await waitForInit(page)
  await openScriptsPopup(page)

  const content = await downloadExport(page)
  expect(content).toContain('let mass = 75 kg')
  expect(content).toContain('fn bmi(h: Length) = mass / h^2')
})

// ── Repeated export ───────────────────────────────────────────────────────────

test('export can be triggered multiple times and produces consistent output', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await runCalc(page, 'let x = 10 km')
  await openScriptsPopup(page)

  for (let i = 0; i < 3; i++) {
    const content = await downloadExport(page)
    expect(content).toBe('let x = 10 km')
  }
})
