const{test,expect}=require('@playwright/test')
test('Date Picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

//using . fill 

     //await page.fill('//div[@class="post-body entry-content"]//p[1]/input','30/04/2026')
    //await page.waitForTimeout(5000)

//date picker1️⃣

const year='2028'
const month='March'
const date = '20'

await page.click('//div[@class="post-body entry-content"]//p[1]/input');

while(true) 
{
   const currentmonth = await page.locator('.ui-datepicker-month').textContent()
   const currentyear = await page.locator('.ui-datepicker-year').textContent() 

//once year and month are match the loop will break

 if(currentmonth==month && currentyear==year)  
 {
    break;
 }

 //this line will click the ▶️until year and month  got match
   await page.locator("a[title='Next']").click()
}
//loop statement for the date
   const date1=await page.$$("a[class='ui-state-default']")

  for(const dt of date1)
{
    if(await dt.textContent()==date)
    {
        await dt.click()
        break;
    }    
}

   await page.waitForTimeout(5000)



//   await page.locator('#txtDate').click();
//   await page.getByLabel('Select year').selectOption('2027');
//   await page.getByLabel('Select month').selectOption('1');
   

//    const date2='25'
//    const date3=await page.$$("[class='ui-state-default']")

//   for(const dt of date3)
// {
//     if(await dt.textContent()==date2)
//     {
//         await dt.click()
//         break;
//     }    
// }
await page.waitForTimeout(5000)


})