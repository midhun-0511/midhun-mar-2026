//const {test,expect} = require('@playwright/test');
import{test,expect} from '@playwright/test';

test('homePage',async({page}) => {
 await page.goto('https://www.amazon.in/')

 await expect(page).toHaveTitle( "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in "
    
 );

 const pageTitle=await page.title();
 console.log('page title is:',pageTitle );

 
 const pageURL=await page.url();
 console.log('page url is :',pageURL);

await expect(page).toHaveURL('https://www.amazon.in/');
await page.close();
})