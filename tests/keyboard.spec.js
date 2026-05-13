import { test, expect } from '@playwright/test'
test('keyboardtype', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#name").click();
    await page.keyboard.type("midhun");
   // await page.locator("#name").dblclick();
   await page.keyboard.press('Control+A');
   await page.keyboard.press('Control+C');
 
   await page.locator("#Wikipedia1_wikipedia-search-input").click();
   await page.keyboard.press('Control+V');
   await page.waitForTimeout(3000);

})