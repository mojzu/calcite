import { test, expect, type Page } from '@playwright/test'

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function runCalc(page: Page, expr: string): Promise<void> {
  await page.locator('#input').fill(expr)
  await page.locator('#input').press('Enter')
}

// ── Built-in command output formatting ───────────────────────────────────────

test('help command output contains no jquery.terminal markup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'help')

  const resultText = await page.locator('.result').last().innerText()
  // jquery.terminal sequences look like [[color;bg;class]text] — none should appear
  expect(resultText).not.toMatch(/\[\[/)
})

test('help command output contains readable text', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, 'help')

  const resultText = await page.locator('.result').last().innerText()
  expect(resultText.length).toBeGreaterThan(10)
})

// ── Square brackets in output are preserved ───────────────────────────────────

test('unit type annotation brackets in output are not stripped', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  // Numbat appends a type annotation like [Velocity] in pretty-print output;
  // these single-bracket sequences must not be stripped by the jquery.terminal
  // stripping logic which only targets double-bracket [[...]] sequences.
  await runCalc(page, '8 km / (1 h + 25 min)')

  const resultText = await page.locator('.result').last().innerText()
  expect(resultText).not.toMatch(/\[\[/)
  expect(resultText).toMatch(/\[Velocity\]/)
})
