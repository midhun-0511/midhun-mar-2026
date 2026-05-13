import{test,expect} from"@playwright/test";
test('product link', async({page}) => {

  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.goto('https://www.demoblaze.com/#');
 
  
 await page.waitForSelector("a.hrefch");

 // const a =page.locator("a.nav-link").all();

  const links = await page.$$("a.hrefch");

 for(const allLink of links)
 {
    const linktext = await allLink.textContent();
    console.log(linktext);
  
 }  


   /* const links = page.locator('a');

  const allTexts = await links.allTextContents();

  allTexts.forEach((text, index) => {
    console.log(`${index + 1}: ${text}`);
  });
});
 await page. getByPlaceholder('Username') .fill('Admin');
await page. getByPlaceholder('Password') .fill('admin123');
await page. getByRole('button',{name: ' Login '}).click();
*/

})
