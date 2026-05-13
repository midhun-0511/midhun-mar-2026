const{test,expect}= require('@playwright/test');

test('alert with ok',async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog',async dialog=>{

    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await page.waitForEvent('dialog');
    await new Promise(resolve => setTimeout(resolve, 3000));
    await dialog.accept();


})

})
