import { test, expect, type Page } from '@playwright/test'

const EXAMPLES = new URL('examples/', import.meta.url).pathname

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function openScriptsPopup(page: Page): Promise<void> {
  await page.locator('#scripts-panel-btn').click()
  await expect(page.locator('#scripts-popup')).toBeVisible()
}

async function uploadScript(page: Page, filename: string): Promise<void> {
  await page.locator('#scripts-file-input').setInputFiles(EXAMPLES + filename)
}

// ── Scripts popup ─────────────────────────────────────────────────────────────

test('Scripts button opens the scripts popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await expect(page.locator('#scripts-popup')).not.toBeVisible()
  await page.locator('#scripts-panel-btn').click()
  await expect(page.locator('#scripts-popup')).toBeVisible()
})

test('scripts popup shows upload button with icon', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  const btn = page.locator('#scripts-upload-btn')
  await expect(btn).toBeVisible()
  await expect(btn).toContainText('Upload file')
  await expect(btn.locator('svg')).toBeVisible()
})

test('scripts popup shows empty state before any upload', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await expect(page.locator('#scripts-list .no-vars')).toBeVisible()
})

// ── bmi.nbt ───────────────────────────────────────────────────────────────────

test('loading bmi.nbt adds an entry to the scripts list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await uploadScript(page, 'bmi.nbt')

  const item = page.locator('#scripts-list .script-item')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.script-name')).toHaveText('bmi.nbt')
  await expect(item.locator('.script-meta')).toHaveText('1 function')
  await expect(item).not.toHaveClass(/error/)
})

test('loading bmi.nbt adds body_mass_index to the functions panel', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#functions-panel-btn').click()
  await expect(page.locator('#functions-list .fn-item .fn-name', { hasText: 'body_mass_index' })).toBeVisible()
})

test('body_mass_index from bmi.nbt can be used in a calculation', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('body_mass_index(70 kg, 1.75 m)')
  await page.locator('#input').press('Enter')

  const result = page.locator('.result').last()
  await expect(result).not.toHaveClass(/error/)
  await expect(result).toContainText('BMI')
})

// ── factorial.nbt ─────────────────────────────────────────────────────────────

test('loading factorial.nbt adds an entry to the scripts list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await uploadScript(page, 'factorial.nbt')

  const item = page.locator('#scripts-list .script-item')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.script-name')).toHaveText('factorial.nbt')
  await expect(item.locator('.script-meta')).toHaveText('1 function')
  await expect(item).not.toHaveClass(/error/)
})

test('factorial from factorial.nbt can be used in a calculation', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'factorial.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('factorial(5)')
  await page.locator('#input').press('Enter')

  const result = page.locator('.result').last()
  await expect(result).not.toHaveClass(/error/)
  await expect(result).toContainText('120')
})

// ── paper_sizes.nbt ───────────────────────────────────────────────────────────

test('loading paper_sizes.nbt adds an entry to the scripts list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await uploadScript(page, 'paper_sizes.nbt')

  const item = page.locator('#scripts-list .script-item')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.script-name')).toHaveText('paper_sizes.nbt')
  await expect(item.locator('.script-meta')).toHaveText('4 functions')
  await expect(item).not.toHaveClass(/error/)
})

test('loading paper_sizes.nbt adds all functions to the functions panel', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'paper_sizes.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#functions-panel-btn').click()
  const fnNames = page.locator('#functions-list .fn-item .fn-name')
  await expect(fnNames.filter({ hasText: 'paper_size_A' })).toBeVisible()
  await expect(fnNames.filter({ hasText: 'paper_area' })).toBeVisible()
  await expect(fnNames.filter({ hasText: 'size_as_string' })).toBeVisible()
  await expect(fnNames.filter({ hasText: 'row' })).toBeVisible()
})

test('paper_size_A from paper_sizes.nbt returns the correct A0 width', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'paper_sizes.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('paper_size_A(0).width -> mm')
  await page.locator('#input').press('Enter')

  const result = page.locator('.result').last()
  await expect(result).not.toHaveClass(/error/)
  await expect(result).toContainText('841')
})

// ── Multiple scripts ──────────────────────────────────────────────────────────

test('uploading multiple scripts shows each as a separate entry in the list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await uploadScript(page, 'bmi.nbt')
  await uploadScript(page, 'factorial.nbt')
  await uploadScript(page, 'paper_sizes.nbt')

  const items = page.locator('#scripts-list .script-item')
  await expect(items).toHaveCount(3)
  await expect(items.locator('.script-name').filter({ hasText: 'bmi.nbt' })).toBeVisible()
  await expect(items.locator('.script-name').filter({ hasText: 'factorial.nbt' })).toBeVisible()
  await expect(items.locator('.script-name').filter({ hasText: 'paper_sizes.nbt' })).toBeVisible()
})

// ── Reset ─────────────────────────────────────────────────────────────────────

test('reset clears the scripts list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await expect(page.locator('#scripts-list .script-item')).toHaveCount(1)
  await page.locator('#scripts-popup-close').click()

  await page.locator('#reset-btn').click()
  await page.locator('#confirm-popup-ok').click()

  await openScriptsPopup(page)
  await expect(page.locator('#scripts-list .no-vars')).toBeVisible()
  await expect(page.locator('#scripts-list .script-item')).toHaveCount(0)
})

// ── Functions panel unaffected ────────────────────────────────────────────────

test('functions panel still shows user-defined functions alongside loaded scripts', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('fn double(x: Scalar) = 2 x')
  await page.locator('#input').press('Enter')

  await page.locator('#functions-panel-btn').click()
  const fnNames = page.locator('#functions-list .fn-item .fn-name')
  await expect(fnNames.filter({ hasText: 'body_mass_index' })).toBeVisible()
  await expect(fnNames.filter({ hasText: 'double' })).toBeVisible()
})
