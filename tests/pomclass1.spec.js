import { test,expect } from "@playwright/test"
import{Midhun, pomtest} from'../pages/pomtest.js';
test('practicespom',async({page})=>{
    const model1= new Midhun(page);
    await model1.gotologinpage();
    await model1.Login('midhun1','midhun@123');
    await page.waitForTimeout(2000);
})
