import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  //3️⃣line 

  const stdate = page.getByPlaceholder('Start Date')
  await stdate.fill('2023-11-05');
  await expect(stdate).toHaveValue('2023-11-05')


  const enddate= page.getByPlaceholder('End Date')
  await enddate.fill('2024-11-06');
  await expect(enddate).toHaveValue('2024-11-06')


  const submitbtn= page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' });
  await expect(submitbtn).toBeVisible();
  await expect(submitbtn).toBeEnabled();
  await submitbtn.click()

});