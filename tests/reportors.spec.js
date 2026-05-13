//const {test,expect} = require('@playwright/test');
import{test,expect} from '@playwright/test';

test('homePage',async({page}) => {
 await page.goto('https://www.amazon.in/')

 await expect(page).toHaveTitle( "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in "
    
 );

})
test ('flipkart', async({page})=>{

    await page.goto('https://www.flipkart.com/')
})
test ('myntra', async({page})=>{

    await page.goto('https://www.myntragloba.com/')
})