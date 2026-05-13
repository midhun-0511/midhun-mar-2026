import{test,expect}from'@playwright/test'
test('useframe',async ({page}) => {
    
    await page.goto("https://ui.vision/demo/webtest/frames/");

   //total frame
   //const allframes=await page.frames()
   //console.log('Number of frames',allframes.length);
  
   //approch 1 using name of url
  // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}) 
   //await frame1.fill('input[type="text"]','midhun');

 //  await page.waitForTimeout(5000);

   //approch 2 using frame locator

   //const frame = page.frameLocator('frame[src="frame_1.html"]');
   //await frame.locator("[name='mytext1']").fill("hello");
   const inputbox= page.frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']");
    await inputbox.fill("hello");
   await page.waitForTimeout(5000);
})
  