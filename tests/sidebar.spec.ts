import { test, expect, type Page } from '@playwright/test'

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

// ── Sidebar links ─────────────────────────────────────────────────────────────

test('GitHub Repository link points to the correct repository and opens in a new tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  const link = page.locator('a.sidebar-link[href*="github.com"]')
  await expect(link).toHaveAttribute('href', 'https://github.com/mojzu/calcite')
  await expect(link).toHaveAttribute('target', '_blank')
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  await expect(link).toHaveText('GitHub repository ↗')
})

test('Numbat documentation link points to the correct URL and opens in a new tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  const link = page.locator('a.sidebar-link[href*="numbat.dev"]')
  await expect(link).toHaveAttribute('href', 'https://numbat.dev/docs/')
  await expect(link).toHaveAttribute('target', '_blank')
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
})

test('About Calcite button opens the about popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await expect(page.locator('#about-popup')).not.toBeVisible()
  await page.locator('#about-btn').click()
  await expect(page.locator('#about-popup')).toBeVisible()

  const version = page.locator('#about-version')
  await expect(version).not.toBeEmpty()

  await page.locator('#about-popup-close').click()
  await expect(page.locator('#about-popup')).not.toBeVisible()
})

// ── Popup stacking ────────────────────────────────────────────────────────────

test('info popup appears above the units popup and its close button is interactive', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#units-panel-btn').click()
  await expect(page.locator('#units-popup')).toBeVisible()

  await page.locator('#units-help-btn').click()
  await expect(page.locator('#info-popup')).toBeVisible()

  // If the info popup were behind the units popup the close button would be
  // intercepted and this click would fail
  await page.locator('#info-popup-close').click()
  await expect(page.locator('#info-popup')).not.toBeVisible()

  // Units popup should still be open after closing the info popup
  await expect(page.locator('#units-popup')).toBeVisible()
})

test('info popup appears above the functions popup and its close button is interactive', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#functions-panel-btn').click()
  await expect(page.locator('#functions-popup')).toBeVisible()

  await page.locator('#functions-help-btn').click()
  await expect(page.locator('#info-popup')).toBeVisible()

  await page.locator('#info-popup-close').click()
  await expect(page.locator('#info-popup')).not.toBeVisible()

  // Functions popup should still be open after closing the info popup
  await expect(page.locator('#functions-popup')).toBeVisible()
})

test('info popup backdrop click closes it without closing the underlying popup', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#units-panel-btn').click()
  await page.locator('#units-help-btn').click()
  await expect(page.locator('#info-popup')).toBeVisible()

  // Click a corner of the info-popup backdrop that won't hit the popup itself
  await page.locator('#info-popup-backdrop').click({ position: { x: 10, y: 10 } })
  await expect(page.locator('#info-popup')).not.toBeVisible()
  await expect(page.locator('#units-popup')).toBeVisible()
})
