const {test,expect}=require ('@playwright/test')

test('locator', async({page}) => {
    await page.goto('https://www.demoblaze.com/');

    //await page.locator('a#login2').click()
     
    await page.click('a#login2')
     
    //await page.fill('input#loginusername','midhun1');
    await page.locator('input#loginusername').fill('midhun1');

     //await page.fill('input#loginpassword','midhun@123');
      await page.locator('input#loginpassword').fill('midhun@123');

      //await page.click('button[onclick="logIn()"]');
       await page.locator('button[onclick="logIn()"]').click();

        //await page.click('a#logout2');

         await page.locator('a#logout2').click();

         await page.close()



})