import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  /*//single checkbox

  await page.locator('//input[@id="sunday"and @type="checkbox"]').click();
   //await page.check('//input[@id="sunday"and @type="checkbox"]');

     await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked();
   //await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]').isChecked()).toBeTruthy();
   //await expect(await page.locator('//input[@id="wednesday"and @type="checkbox"]').isChecked()).toBeFalsy();
     await expect(await page.locator('//input[@id="wednesday"and @type="checkbox"]')).not.toBeChecked();

     */

     //useing $$ to check and uncheck the checkbox

     const days=await page.$$("//input[@type='checkbox' and @class='form-check-input']");
     for(const day of days)
{
  await day.check()

}
for(const day of days)
  if (await day.isChecked())
{
  await day.uncheck()
}
await page.waitForTimeout(5000);
    
    /* //multi locator
      const checkboxlocators=[
       
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
       "//input[@id='tuesday'and @type='checkbox']"
  
        ];

        for(const locator of checkboxlocators)
      {
        await page.locator(locator).check();
     }
        await page.waitForTimeout(5000);

        // uncheck the multiple element

         for(const locator of checkboxlocators)
          if(await page.locator(locator).isChecked())  //dont use semicolon (;) at the end of the if statement
         {
          await page.locator(locator).uncheck(); 
        }
        await page.waitForTimeout(5000);
      //radio botton

    /*await page.locator('//div[@class="form-check form-check-inline"]//following::input[@value="male"]').click();
  // await page.getByText('Male', { exact: true }).click();
   await expect(await page.locator('//input[@value="male"]')).toBeChecked();
  // await expect(page.locator('//input[@value="female"]')).not.toBeChecked();
   await expect(await page.locator('//input[@value="male"]').isChecked()).toBeTruthy();
   await expect(await page. locator('//input[@value="female"]').isChecked()).toBeFalsy();*/






});