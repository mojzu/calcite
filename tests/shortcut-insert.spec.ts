import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('#input:not([disabled])')
  // Wait for Numbat to initialise (loading message disappears)
  await page.waitForFunction(() => {
    const output = document.getElementById('output')
    return output && !output.querySelector('.init-msg')
  })
})

test.describe('shortcut button insertion', () => {
  test('appends to end of empty input', async ({ page }) => {
    const input = page.locator('#input')
    await page.click('[data-insert="1"]')
    await expect(input).toHaveValue('1')
  })

  test('appends to end when input has existing text and no focus', async ({ page }) => {
    const input = page.locator('#input')
    // Type directly so the input has a value, then click elsewhere to lose focus
    await input.fill('100')
    await page.click('#output')  // defocus input
    await page.click('[data-insert=" to "]')
    await expect(input).toHaveValue('100 to ')
  })

  test('appends to end when multiple shortcuts clicked without focus', async ({ page }) => {
    const input = page.locator('#input')
    await page.click('[data-insert="1"]')
    await page.click('[data-insert="2"]')
    await page.click('[data-insert="3"]')
    await expect(input).toHaveValue('123')
  })

  test('appends operator shortcut to end of existing text', async ({ page }) => {
    const input = page.locator('#input')
    await input.fill('100')
    await page.click('#output')  // defocus input
    await page.click('[data-insert=" + "]')
    await expect(input).toHaveValue('100 + ')
  })

  test('builds a full expression by clicking shortcuts without typing', async ({ page }) => {
    const input = page.locator('#input')
    await page.click('[data-insert="1"]')
    await page.click('[data-insert="0"]')
    await page.click('[data-insert="0"]')
    await page.click('[data-insert=" + "]')
    await page.click('[data-insert="2"]')
    await page.click('[data-insert="0"]')
    await expect(input).toHaveValue('100 + 20')
  })

  test('focuses input after shortcut click', async ({ page }) => {
    // Click elsewhere first to ensure input is not focused
    await page.click('#output')
    await page.click('[data-insert="5"]')
    const focused = await page.evaluate(() => document.activeElement?.id)
    expect(focused).toBe('input')
  })

  test('numpad digits append in sequence', async ({ page }) => {
    const input = page.locator('#input')
    for (const digit of ['4', '2', '0']) {
      await page.click(`[data-insert="${digit}"]`)
    }
    await expect(input).toHaveValue('420')
  })

  test('unit chip appends to existing expression', async ({ page }) => {
    const input = page.locator('#input')
    await input.fill('9.81')
    await page.click('#output')  // defocus
    // Open units popup and click m/s² chip — use the metres chip as a simpler proxy
    await page.click('#units-panel-btn')
    await page.waitForSelector('#units-popup.visible')
    await page.click('#units-popup .unit-chip[title="metre"]')
    await expect(input).toHaveValue('9.81m')
  })
})
