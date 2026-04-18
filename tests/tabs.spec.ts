import { test, expect, type Page } from '@playwright/test'

async function waitForInit(page: Page): Promise<void> {
  await expect(page.locator('.entry.init-msg')).toHaveCount(0, { timeout: 15_000 })
}

async function runCalc(page: Page, expr: string): Promise<void> {
  await page.locator('#input').fill(expr)
  await page.locator('#input').press('Enter')
}

function tabs(page: Page) {
  return page.locator('#tabs-scroll .tab')
}

function activeTab(page: Page) {
  return page.locator('#tabs-scroll .tab.active')
}

async function closeTab(page: Page, tab: ReturnType<Page['locator']>): Promise<void> {
  await tab.hover()
  await tab.locator('.tab-close').click()
}

// ── Initial state ─────────────────────────────────────────────────────────────

test('app loads with a single auto-created tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await expect(tabs(page)).toHaveCount(1)
})

test('app loads the most recent session when sessions exist', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '5 + 5')
  await page.locator('#new-session-btn').click()
  await runCalc(page, '10 * 2')

  await page.reload()
  await waitForInit(page)

  // Most recent session had "10 * 2 = 20"
  await expect(page.locator('.result').last()).toContainText('20')
})

// ── New session button ────────────────────────────────────────────────────────

test('new session button creates a tab when the current tab has content', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')
  await page.locator('#new-session-btn').click()

  await expect(tabs(page)).toHaveCount(2)
  // New tab is active and blank
  await expect(activeTab(page)).toBeVisible()
  await expect(page.locator('.entry')).toHaveCount(0)
})

test('new session button creates a new tab and discards the empty current tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  // Create a non-empty session so we have something to go back to
  await runCalc(page, '2 + 2')
  await page.locator('#new-session-btn').click() // 2 tabs; 2nd is active and empty

  await expect(tabs(page)).toHaveCount(2)

  // Record the active session ID before clicking new session again
  const idBefore = await page.locator('#session-select').inputValue()

  // Clicking new session from an empty tab should discard the empty one and create a new one
  await page.locator('#new-session-btn').click()

  const idAfter = await page.locator('#session-select').inputValue()

  // A genuinely new session was created (different ID)
  expect(idAfter).not.toBe(idBefore)
  // Empty tab was discarded; count stays at 2 (non-empty original + new empty)
  await expect(tabs(page)).toHaveCount(2)
})

// ── Closing tabs ──────────────────────────────────────────────────────────────

test('closing the active tab switches to an adjacent tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 km to m')
  await page.locator('#new-session-btn').click()
  await runCalc(page, '2 + 2')

  // 2 tabs; 2nd (with "2 + 2") is active
  await expect(tabs(page)).toHaveCount(2)

  await closeTab(page, activeTab(page))

  // Should switch to the remaining tab — not create a new blank one
  await expect(tabs(page)).toHaveCount(1)
  // The replayed session should contain the first calculation
  await expect(page.locator('.result').last()).toContainText('1000')
})

test('closing the last remaining tab creates a new empty tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '5 * 5')

  await closeTab(page, activeTab(page))

  // One new blank tab must be created automatically
  await expect(tabs(page)).toHaveCount(1)
  await expect(page.locator('.entry')).toHaveCount(0)
})

// ── Switching tabs ────────────────────────────────────────────────────────────

test('switching to another tab discards the empty current tab', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '3 * 3')
  await page.locator('#new-session-btn').click() // 2 tabs; 2nd empty and active

  await expect(tabs(page)).toHaveCount(2)

  // Click the label of the first (non-empty) tab
  await tabs(page).first().locator('.tab-label').click()

  // The empty 2nd tab should have been discarded
  await expect(tabs(page)).toHaveCount(1)
  await expect(page.locator('.result').last()).toContainText('9')
})

test('switching to another tab preserves the current tab when it has content', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '3 * 3')
  await page.locator('#new-session-btn').click()
  await runCalc(page, '4 * 4')

  // 2 non-empty tabs; switch back to the first
  await tabs(page).first().locator('.tab-label').click()

  await expect(tabs(page)).toHaveCount(2)
})

// ── Renaming tabs ─────────────────────────────────────────────────────────────

test('double-clicking a tab label allows renaming it', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')

  const label = activeTab(page).locator('.tab-label')
  await label.dblclick()

  const renameInput = activeTab(page).locator('.tab-rename-input')
  await expect(renameInput).toBeVisible()

  await renameInput.fill('My Session')
  await renameInput.press('Enter')

  await expect(activeTab(page).locator('.tab-label')).toHaveText('My Session')
})

test('pressing Escape while renaming cancels and restores the original name', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')

  const label = activeTab(page).locator('.tab-label')
  const originalName = await label.textContent()

  await label.dblclick()
  const renameInput = activeTab(page).locator('.tab-rename-input')
  await renameInput.fill('Temporary Name')
  await renameInput.press('Escape')

  await expect(activeTab(page).locator('.tab-label')).toHaveText(originalName ?? '')
})

// ── Persistence ───────────────────────────────────────────────────────────────

test('sessions and their content persist across a page reload', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '100 cm to m')
  await page.locator('#new-session-btn').click()
  await runCalc(page, '60 min to s')

  await page.reload()
  await waitForInit(page)

  await expect(tabs(page)).toHaveCount(2)
  // Most recent session ("60 min to s") should be active
  await expect(page.locator('.result').last()).toContainText('3600')
})

test('renamed tabs retain their name after a page reload', async ({ page }) => {
  await page.goto('/')
  await waitForInit(page)

  await runCalc(page, '1 + 1')

  const label = activeTab(page).locator('.tab-label')
  await label.dblclick()
  const renameInput = activeTab(page).locator('.tab-rename-input')
  await renameInput.fill('Saved Session')
  await renameInput.press('Enter')

  await page.reload()
  await waitForInit(page)

  await expect(tabs(page).filter({ hasText: 'Saved Session' })).toHaveCount(1)
})
