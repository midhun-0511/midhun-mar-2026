import { test, expect } from '@playwright/test'
test('frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    await frame3.locator("input[name='mytext3']").fill('midhun');
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator("label[for='i9']").click();
    //await childFrames[0].locator("//div[@class='PkgjBf MbhUzd']").check();


    //click multiple check box using multi locator and for loop

    const checkbox = childFrames[0].locator('div[role="checkbox"]');

    const all = await checkbox.all()

    for (const box of all) {
        await box.click();
    }
    await page.waitForTimeout(2000) 

    //dropdown using click method 
    
    await childFrames[0].locator('//div[@role="listbox"]').click()
    await page.waitForTimeout(1000)

    await childFrames[0].locator("//div[@role='option']//span[text()='Yes']").click()
    await page.waitForTimeout(2000)


    //switching to next page(next button)
   
    await childFrames[0].locator('//div[@role="button"and @class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]//span[text()="Next"]').click();


   // page 2 (useing .fill and button) 
   
   await childFrames[0].locator('//input[@type="text" and @class="whsOnd zHQkBf"]').fill('how are you');
  

   await childFrames[0].locator('//textarea[@class="KHxj8b tL9Q4c"]').fill('i am midhun');

   await page.waitForTimeout(5000)
   
  //using button (to submit or back in the inner page) 

  //await childFrames[0].locator('//div[@aria-label="Submit"]').click() (if you want submit)
  await childFrames[0].locator('//div[@role="button" and @jsname="GeGHKb"]').click() //(if you want to ga back)
  await page.waitForTimeout(2000)
})
