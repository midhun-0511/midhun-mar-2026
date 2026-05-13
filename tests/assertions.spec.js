import { test, expect } from '@playwright/test';

test('Register flow on nopCommerce demo', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Verify store logo is visible
  const photo = page.getByAltText('company-branding');
  await expect(photo).toBeVisible();

  // Fill registration form
  await page.getByLabel('Username').fill('Admin');
  await page.getByLabel('Password:').nth(0).fill('admin123'); 


  // Submit form
  await page.getByRole('button', { type: 'submit' }).click();

 /* // ✅ Instead of hard wait, check for success or error message
  await expect(page.locator('.result')).toBeVisible();
  await expect(page.locator('.result')).toContainText([
    'Your registration completed',
    'The specified email already exists
  ]); */
});
