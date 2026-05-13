import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'New Releases' }).click();
  await page.locator('#B0GKPNWNT3 > a').click();
  await page.locator('html').click();
  await page.getByRole('link', { name: 'items in cart' }).click();
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
});