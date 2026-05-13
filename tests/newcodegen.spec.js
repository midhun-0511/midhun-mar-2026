import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'For Business Purchases' }).click();
  await page.getByRole('link', { name: 'Banner' }).click();
  await page.getByRole('link', { name: 'license' }).click();
  await page.getByRole('link', { name: 'Cleaning', exact: true }).click();
  await page.goto('about:blank');
});