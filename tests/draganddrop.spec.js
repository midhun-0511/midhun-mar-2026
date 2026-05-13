const{test,expect}=require('@playwright/test')
test('Date Picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

     const drag1= await page.locator('div#draggable');

     const drop1 = await page.locator('div#droppable');

// Method 1 useing  .hover and mouse.up and mouse.down
    
   // await drag1.hover()
    //await page.mouse.down();
    //await drop1.hover()
    //await page.mouse.up();

// method 2 using .dragTo method
    await page.locator('div#draggable').dragTo(await page.locator('div#droppable'))
   // await drag1.dragTo('drop1');
    await page.waitForTimeout(5000)   

})