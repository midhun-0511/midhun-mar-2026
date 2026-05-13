const{test,expect}= require('@playwright/test');

test('dropdown',async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//multiple ways to select option for dropdon

await page.locator('#country').selectOption({lable:'India'}) //tag //visible texty5yut
//await page.getByRole('combobox', { name: 'Country:' }).selectOption('India');


/*// 1)check number of option in the dropdowns:  approch:1
const options=await page.locator('#country option');
await expect(options).toHaveCount(10);

// 2)check number of option in the dropdowns:  approch:2

const option = await page.$$('#country option')
console.log('number of dropdowns are:',option.length);
await expect(option.length).toBe(10);

//3)check the specific option is available in the dropdowns:  approch:3

const content=await page.locator('#country').textContent();
await expect(content.includes('India')).toBeTruthy()*/

//4)check the prasence of the value in the dropdoen option useing -- loop 
const values=await page.$$('#country option');
let status=false;
for(const option of values)
{
    let name=await option.textContent()
    if(name.includes('India'))
    {
        status=true;
        break;
    }    

}
await expect (status).toBeTruthy();
await page.waitForTimeout(5000);


})
