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
  await expect(btn).toContainText('Upload')
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

// ── population_growth.nbt ─────────────────────────────────────────────────────

test('loading population_growth.nbt adds an entry to the scripts list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await uploadScript(page, 'population_growth.nbt')

  const item = page.locator('#scripts-list .script-item')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.script-name')).toHaveText('population_growth.nbt')
  await expect(item.locator('.script-meta')).toHaveText('1 function, 2 variables')
  await expect(item).not.toHaveClass(/error/)
})

test('predict_population from population_growth.nbt can be used in a calculation', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'population_growth.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('predict_population(10 years)')
  await page.locator('#input').press('Enter')

  const result = page.locator('.result').last()
  await expect(result).not.toHaveClass(/error/)
  await expect(result).toContainText('person')
})

// ── recipe.nbt ────────────────────────────────────────────────────────────────

test('loading recipe.nbt adds an entry to the scripts list', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  await uploadScript(page, 'recipe.nbt')

  const item = page.locator('#scripts-list .script-item')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.script-name')).toHaveText('recipe.nbt')
  await expect(item.locator('.script-meta')).toHaveText('1 function, 2 variables')
  await expect(item).not.toHaveClass(/error/)
})

test('scale from recipe.nbt correctly scales an ingredient quantity', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'recipe.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('scale(200 g)')
  await page.locator('#input').press('Enter')

  const result = page.locator('.result').last()
  await expect(result).not.toHaveClass(/error/)
  await expect(result).toContainText('300')
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

// ── Page refresh ─────────────────────────────────────────────────────────────

test('scripts list is restored after a page refresh', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await expect(page.locator('#scripts-list .script-item')).toHaveCount(1)

  await page.reload()
  await waitForInit(page)
  await openScriptsPopup(page)

  const item = page.locator('#scripts-list .script-item')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.script-name')).toHaveText('bmi.nbt')
  await expect(item.locator('.script-meta')).toHaveText('1 function')
})

test('multiple scripts are all restored after a page refresh', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await uploadScript(page, 'factorial.nbt')

  await page.reload()
  await waitForInit(page)
  await openScriptsPopup(page)

  const items = page.locator('#scripts-list .script-item')
  await expect(items).toHaveCount(2)
  await expect(items.locator('.script-name').filter({ hasText: 'bmi.nbt' })).toBeVisible()
  await expect(items.locator('.script-name').filter({ hasText: 'factorial.nbt' })).toBeVisible()
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

  await page.locator('#input').fill('fn span_length(a: Length, b: Length) = a + b')
  await page.locator('#input').press('Enter')

  await page.locator('#functions-panel-btn').click()
  const fnNames = page.locator('#functions-list .fn-item .fn-name')
  await expect(fnNames.filter({ hasText: 'body_mass_index' })).toBeVisible()
  await expect(fnNames.filter({ hasText: 'span_length' })).toBeVisible()
})

// ── Download ──────────────────────────────────────────────────────────────────

test('scripts popup shows a download button', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)

  const btn = page.locator('#scripts-download-btn')
  await expect(btn).toBeVisible()
  await expect(btn).toContainText('Export')
  await expect(btn.locator('svg')).toBeVisible()
})

test('download exports let and fn definitions as an .nbt file', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#input').fill('let weight = 80 kg')
  await page.locator('#input').press('Enter')
  await page.locator('#input').fill('fn double(n: Scalar) = 2 * n')
  await page.locator('#input').press('Enter')
  await page.locator('#input').fill('1 km to mi')
  await page.locator('#input').press('Enter')

  await openScriptsPopup(page)

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#scripts-download-btn').click(),
  ])

  const path = await download.path()
  const { readFileSync } = await import('fs')
  const content = readFileSync(path!, 'utf8')
  expect(content).toContain('let weight = 80 kg')
  expect(content).toContain('fn double(n: Scalar) = 2 * n')
  expect(content).not.toContain('1 km to mi')
})

test('downloaded file has a .nbt extension', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await page.locator('#input').fill('let x = 42')
  await page.locator('#input').press('Enter')
  await openScriptsPopup(page)

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#scripts-download-btn').click(),
  ])

  expect(download.suggestedFilename()).toMatch(/\.nbt$/)
})

test('download produces an empty file when the session has no definitions', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await page.locator('#input').fill('1 km to mi')
  await page.locator('#input').press('Enter')
  await openScriptsPopup(page)

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#scripts-download-btn').click(),
  ])

  const path = await download.path()
  const { readFileSync } = await import('fs')
  const content = readFileSync(path!, 'utf8')
  expect(content).toBe('')
})

test('download does not include uploaded script file contents', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)
  await openScriptsPopup(page)
  await uploadScript(page, 'bmi.nbt')
  await page.locator('#scripts-popup-close').click()

  await page.locator('#input').fill('let my_weight = 80 kg')
  await page.locator('#input').press('Enter')

  await openScriptsPopup(page)

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#scripts-download-btn').click(),
  ])

  const path = await download.path()
  const { readFileSync } = await import('fs')
  const content = readFileSync(path!, 'utf8')
  expect(content).toContain('let my_weight = 80 kg')
  expect(content).not.toContain('body_mass_index')
})
