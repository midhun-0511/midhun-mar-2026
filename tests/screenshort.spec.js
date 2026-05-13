import { test,expert } from '@playwright/test'
test('screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    await page.screenshot({

        path:'screenshots/visible.png',
        fullPage:true

    });



});