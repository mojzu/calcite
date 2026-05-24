import { test, expect, type Page } from '@playwright/test'

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

// ── Built-in functions in Functions popup ─────────────────────────────────────

test('built-in functions section is present in the functions popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await expect(page.locator('#functions-popup')).toBeVisible()
  await expect(page.locator('#builtin-functions-section')).toBeAttached()
})

test('built-in functions section is hidden by default', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await expect(page.locator('#builtin-functions-body')).not.toBeVisible()
})

test('built-in functions toggle reveals the function list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await page.locator('#builtin-functions-toggle').click()
  await expect(page.locator('#builtin-functions-body')).toBeVisible()
})

test('built-in functions toggle collapses when clicked again', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await page.locator('#builtin-functions-toggle').click()
  await expect(page.locator('#builtin-functions-body')).toBeVisible()
  await page.locator('#builtin-functions-toggle').click()
  await expect(page.locator('#builtin-functions-body')).not.toBeVisible()
})

test('built-in functions section contains trig, numeric, and exponential categories', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await page.locator('#builtin-functions-toggle').click()

  const headings = page.locator('#builtin-functions-body h4')
  await expect(headings.filter({ hasText: 'Trigonometry' })).toBeVisible()
  await expect(headings.filter({ hasText: 'Numeric' })).toBeVisible()
  await expect(headings.filter({ hasText: 'Exponential' })).toBeVisible()
})

test('clicking sin in built-in functions inserts sin( into the input', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await page.locator('#builtin-functions-toggle').click()

  await page.locator('#builtin-functions-body .unit-chip', { hasText: 'sin' }).first().click()
  await expect(page.locator('#input')).toHaveValue('sin(')
})

test('clicking a built-in function closes the functions popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await page.locator('#builtin-functions-toggle').click()

  await page.locator('#builtin-functions-body .unit-chip', { hasText: 'sqrt' }).click()
  await expect(page.locator('#functions-popup')).not.toBeVisible()
})

test('built-in function chips show the function signature as a tooltip', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await page.locator('#builtin-functions-toggle').click()

  const sinChip = page.locator('#builtin-functions-body .unit-chip', { hasText: 'sin' }).first()
  await expect(sinChip).toHaveAttribute('title', 'sin(x)')
})

// ── Built-in constants in Variables sidebar ───────────────────────────────────

test('built-in constants section is present in the variables sidebar', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await expect(page.locator('#builtin-constants-section')).toBeAttached()
})

test('built-in constants section is hidden by default', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await expect(page.locator('#builtin-constants-body')).not.toBeVisible()
})

test('built-in constants toggle reveals the constants list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#builtin-constants-toggle').click()
  await expect(page.locator('#builtin-constants-body')).toBeVisible()
})

test('built-in constants toggle collapses when clicked again', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#builtin-constants-toggle').click()
  await expect(page.locator('#builtin-constants-body')).toBeVisible()
  await page.locator('#builtin-constants-toggle').click()
  await expect(page.locator('#builtin-constants-body')).not.toBeVisible()
})

test('pi is listed with a non-empty value in built-in constants', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#builtin-constants-toggle').click()

  const piItem = page.locator('#builtin-constants-body .var-item').filter({
    has: page.locator('.var-name', { hasText: 'pi' }),
  })
  await expect(piItem).toBeVisible()
  await expect(piItem.locator('.var-value')).not.toBeEmpty()
})

test('clicking pi in built-in constants inserts pi into the input', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#builtin-constants-toggle').click()

  const piItem = page.locator('#builtin-constants-body .var-item').filter({
    has: page.locator('.var-name', { hasText: 'pi' }),
  })
  await piItem.click()
  await expect(page.locator('#input')).toHaveValue('pi')
})

test('built-in constants are usable in calculations', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#builtin-constants-toggle').click()

  const piItem = page.locator('#builtin-constants-body .var-item').filter({
    has: page.locator('.var-name', { hasText: 'pi' }),
  })
  await piItem.click()

  await page.locator('#input').press('Enter')
  await expect(page.locator('.result').last()).not.toHaveClass(/error/)
  await expect(page.locator('.result').last()).toContainText('3.14')
})
