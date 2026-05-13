import { test, expect } from '@playwright/test'
test('doubleclick', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const point = await page.locator("//button[text()='Point Me']")
    await point .hover();
    //await point.click()
    await point.click({button:'left',clickCount: 1})

   const box = await page.locator("#field1").dblclick();
   //await box.click({button:'left',clickCount:2})
   await page.locator('Copy Text').dblclick();
   await page.waitForTimeout(5000)
})