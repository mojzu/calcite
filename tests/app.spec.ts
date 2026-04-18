import { test, expect } from '@playwright/test'

test('performs a unit conversion', async ({ page }) => {
  await page.goto('/')

  // Wait for WASM to initialise — the init message is removed once ready
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })

  await page.locator('#input').fill('1 km to m')
  await page.locator('#input').press('Enter')

  await expect(page.locator('.result').last()).toContainText('1000')
})
