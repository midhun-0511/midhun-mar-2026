const{test,expect, selectors}= require('@playwright/test');

test('table',async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');


await page.locator('//table[@id="productTable"]//tr[1]/td[4]/input').click();


const table=page.locator('#productTable');
const columns = table.locator('thead tr th');
console.log('Number of columns:',await columns.count())

const row=table.locator('tbody tr ');
console.log ('number of product :',await row.count());

// assertion to check
await expect(columns).toHaveCount(4)
await expect(row).toHaveCount(5)   

//method 1 (single slection)

/*
const methodrow= row.filter({
  hasText:"Smartphone"
});
 await methodrow.first().locator('input[type="checkbox"]').check()
 await page.waitForTimeout(5000)

 */

 //method 2 (reusable function)
 /*async function selectProduct(row, page, productName){

   const targetrow = row.filter({ hasText: productName });
   await targetrow.locator('input[type="checkbox"]').check()
} */
   //await selectProduct(row,page,"Smartphone");
   //await selectProduct(row,page,"Laptop");
  //await selectProduct(row,page,"Tablet");

   


   const allpage=page.locator('#pagination li a')
   const pagecount=allpage.count()
   console.log('pagecount:${pagelink}')

   // OUTER LOOP: Go through each page (1, 2, 3, 4)
   for(let p=0;p<await pagecount;p++){
   
    // 1. Click the current page link
    await allpage.nth(p).click()
    console.log(`pageone:${p+1}`)
  
    // 2. IMPORTANT: Wait for the table to change 
   // We wait for the first cell of the first row to be visible
    await page.waitForTimeout(5000)

   

  for(let i=0;i<await row.count();i++){
  const rows = row.nth(i);
  const tds=rows.locator('td')

  for(let j=0;j<await tds.count();j++){
  const text= await tds.nth(j).textContent()
  console.log(text);
}


}
   }

})