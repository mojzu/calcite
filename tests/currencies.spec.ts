import { test, expect, type Page } from '@playwright/test'

const MOBILE_VIEWPORT = { width: 640, height: 812 }

const MOCK_ECB_XML = `<?xml version="1.0" encoding="UTF-8"?>
<gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
  <Cube>
    <Cube time='2026-04-18'>
      <Cube currency='USD' rate='1.1350'/>
      <Cube currency='GBP' rate='0.8560'/>
    </Cube>
  </Cube>
</gesmes:Envelope>`

async function mockRates(page: Page): Promise<void> {
  await page.route('**/ecb-rates.xml', route =>
    route.fulfill({ contentType: 'application/xml', body: MOCK_ECB_XML })
  )
}

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function waitForRates(page: Page): Promise<void> {
  await expect(page.locator('#currencies-status')).not.toHaveClass(/currencies-loading/, { timeout: 5_000 })
}

async function runCalc(page: Page, expr: string): Promise<void> {
  await page.locator('#input').fill(expr)
  await page.locator('#input').press('Enter')
}

// ── Popup open/close ──────────────────────────────────────────────────────────

test('currencies panel button opens the currencies popup', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#currencies-panel-btn').click()
  await expect(page.locator('#currencies-popup')).toBeVisible()
})

test('currencies popup close button dismisses it', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#currencies-panel-btn').click()
  await expect(page.locator('#currencies-popup')).toBeVisible()

  await page.locator('#currencies-popup-close').click()
  await expect(page.locator('#currencies-popup')).not.toBeVisible()
})

test('currencies popup backdrop click dismisses it', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#currencies-panel-btn').click()
  await expect(page.locator('#currencies-popup')).toBeVisible()

  await page.locator('#currencies-popup-backdrop').click({ position: { x: 10, y: 10 } })
  await expect(page.locator('#currencies-popup')).not.toBeVisible()
})

test('Escape key dismisses the currencies popup', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#currencies-panel-btn').click()
  await expect(page.locator('#currencies-popup')).toBeVisible()

  await page.keyboard.press('Escape')
  await expect(page.locator('#currencies-popup')).not.toBeVisible()
})

// ── Rate loading ──────────────────────────────────────────────────────────────

test('currencies status shows the ECB rate date after rates load', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await expect(page.locator('#currencies-status')).toHaveText('European Central Bank rates · 18 Apr 2026')
})

test('currencies status shows Unavailable when the fetch fails', async ({ page }) => {
  await page.route('**/ecb-rates.xml', route => route.fulfill({ status: 503 }))
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await expect(page.locator('#currencies-status')).toHaveText('Unavailable')
})

test('currency chips appear in the popup after rates load', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await page.locator('#currencies-panel-btn').click()
  await expect(page.locator('#currencies-list .unit-chip')).toHaveCount(3)
  await expect(page.locator('#currencies-list .unit-chip').filter({ hasText: 'EUR' })).toBeVisible()
  await expect(page.locator('#currencies-list .unit-chip').filter({ hasText: 'GBP' })).toBeVisible()
  await expect(page.locator('#currencies-list .unit-chip').filter({ hasText: 'USD' })).toBeVisible()
})

// ── Chip interaction ──────────────────────────────────────────────────────────

test('clicking a currency chip inserts the code into the input', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await page.locator('#currencies-panel-btn').click()
  await page.locator('#currencies-list .unit-chip').filter({ hasText: 'USD' }).click()

  await expect(page.locator('#input')).toHaveValue('USD')
})

test('clicking a currency chip closes the popup', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await page.locator('#currencies-panel-btn').click()
  await page.locator('#currencies-list .unit-chip').filter({ hasText: 'USD' }).click()

  await expect(page.locator('#currencies-popup')).not.toBeVisible()
})

// ── Currency calculations ─────────────────────────────────────────────────────

test('currency conversion produces a result after rates load', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await runCalc(page, '100 USD to EUR')
  await expect(page.locator('.result').last()).toContainText('€')
})

// Verifies the crash fix: creating new Numbat instances (tab switches) must not
// lose currency definitions loaded via the interpret-based approach.
test('currency conversion works after switching tabs', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  // First session: verify currencies work
  await runCalc(page, '100 USD to EUR')
  await expect(page.locator('.result').last()).toContainText('€')

  // New tab (triggers initNumbat → applyExchangeRates on the new instance)
  await page.locator('#new-session-btn').click()
  await runCalc(page, '50 GBP to EUR')
  await expect(page.locator('.result').last()).toContainText('€')

  // Switch back to first tab (another initNumbat call)
  const tabs = page.locator('#tabs-scroll .tab')
  await tabs.first().locator('.tab-label').click()
  await runCalc(page, '200 USD to EUR')
  await expect(page.locator('.result').last()).toContainText('€')
})

test('session with a currency variable replays without error after reload', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await runCalc(page, 'let budget = 500 USD')
  await expect(page.locator('.entry.error')).toHaveCount(0)

  await page.reload()
  await waitForInit(page)
  await waitForRates(page)

  // Session replay must not produce an error for the currency variable
  await expect(page.locator('.entry.error')).toHaveCount(0)
})

test('currency conversion works after a page reload', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)
  await waitForRates(page)

  await runCalc(page, '100 USD to EUR')

  await page.reload()
  await waitForInit(page)
  await waitForRates(page)

  await runCalc(page, '50 GBP to EUR')
  await expect(page.locator('.result').last()).toContainText('€')
})

// ── Info popup ────────────────────────────────────────────────────────────────

test('info popup appears above the currencies popup and its close button is interactive', async ({ page }) => {
  await mockRates(page)
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#currencies-panel-btn').click()
  await expect(page.locator('#currencies-popup')).toBeVisible()

  await page.locator('#currencies-help-btn').click()
  await expect(page.locator('#info-popup')).toBeVisible()

  await page.locator('#info-popup-close').click()
  await expect(page.locator('#info-popup')).not.toBeVisible()
  await expect(page.locator('#currencies-popup')).toBeVisible()
})

// ── Mobile ────────────────────────────────────────────────────────────────────

test('mobile currencies button is visible on small screens', async ({ page }) => {
  await mockRates(page)
  await page.setViewportSize(MOBILE_VIEWPORT)
  await page.goto('/')
  await waitForInit(page)

  await expect(page.locator('#mobile-currencies-btn')).toBeVisible()
})

test('mobile currencies button opens the currencies popup', async ({ page }) => {
  await mockRates(page)
  await page.setViewportSize(MOBILE_VIEWPORT)
  await page.goto('/')
  await waitForInit(page)

  await page.locator('#mobile-currencies-btn').click()
  await expect(page.locator('#currencies-popup')).toBeVisible()
})
