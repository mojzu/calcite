import { test, expect, type Page } from '@playwright/test'

const MOBILE_VIEWPORT = { width: 640, height: 812 }

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function gotoMobile(page: Page): Promise<void> {
  await page.setViewportSize(MOBILE_VIEWPORT)
  await page.goto('/')
  await waitForInit(page)
}

// ── Button visibility ─────────────────────────────────────────────────────────

test('mobile sidebar buttons are visible on small screens', async ({ page }) => {
  await gotoMobile(page)

  await expect(page.locator('#mobile-vars-btn')).toBeVisible()
  await expect(page.locator('#mobile-units-btn')).toBeVisible()
  await expect(page.locator('#mobile-functions-btn')).toBeVisible()
})

test('mobile sidebar buttons are hidden on desktop screens', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto('/')
  await waitForInit(page)

  await expect(page.locator('#mobile-vars-btn')).not.toBeVisible()
  await expect(page.locator('#mobile-units-btn')).not.toBeVisible()
  await expect(page.locator('#mobile-functions-btn')).not.toBeVisible()
})

// ── Variables button ──────────────────────────────────────────────────────────

test('Variables button opens the sidebar overlay', async ({ page }) => {
  await gotoMobile(page)

  const sidebar = page.locator('#variables')
  await expect(sidebar).not.toHaveClass(/mobile-open/)

  await page.locator('#mobile-vars-btn').click()
  await expect(sidebar).toHaveClass(/mobile-open/)
})

test('sidebar close button dismisses the sidebar overlay', async ({ page }) => {
  await gotoMobile(page)

  await page.locator('#mobile-vars-btn').click()
  await expect(page.locator('#variables')).toHaveClass(/mobile-open/)

  await page.locator('#mobile-sidebar-close').click()
  await expect(page.locator('#variables')).not.toHaveClass(/mobile-open/)
})

// ── Units button ──────────────────────────────────────────────────────────────

test('Units button opens the units popup', async ({ page }) => {
  await gotoMobile(page)

  await page.locator('#mobile-units-btn').click()
  await expect(page.locator('#units-popup')).toBeVisible()
})

test('units popup opened from mobile button can be closed', async ({ page }) => {
  await gotoMobile(page)

  await page.locator('#mobile-units-btn').click()
  await expect(page.locator('#units-popup')).toBeVisible()

  await page.locator('#units-popup-close').click()
  await expect(page.locator('#units-popup')).not.toBeVisible()
})

// ── Functions button ──────────────────────────────────────────────────────────

test('Functions button opens the functions popup', async ({ page }) => {
  await gotoMobile(page)

  await page.locator('#mobile-functions-btn').click()
  await expect(page.locator('#functions-popup')).toBeVisible()
})

test('functions popup opened from mobile button can be closed', async ({ page }) => {
  await gotoMobile(page)

  await page.locator('#mobile-functions-btn').click()
  await expect(page.locator('#functions-popup')).toBeVisible()

  await page.locator('#functions-popup-close').click()
  await expect(page.locator('#functions-popup')).not.toBeVisible()
})
