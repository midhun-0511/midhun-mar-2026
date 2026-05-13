import { test, expect, chromium } from '@playwright/test'
let browser;
let page;

test.describe('hooks in playwright', () => {   //You can declare a group of tests with a title.

    // run once before all test
    test.beforeAll(async () => {
        bowser = await chromium.launch({ headless: false })
        const open = browser.newContext()
        page = (await open).newPage()
        console.log(' 1st - bowser lunched ')
    });

    //run before each test
    test.beforeEach(async () => {
        await page.goto('https://www.demoblaze.com/');
        console.log("2nd- page opened")
    });

    //test 1 : login test
    test('login test', async () => {
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').click();
        await page.locator('#loginusername').fill('midhun1');
        await page.locator('#loginpassword').click();
        await page.locator('#loginpassword').fill('midhun@123');
        await page.getByRole('button', { name: 'Log in' }).click();
    });
    // test 2 : search test
    test('catr', async () => {
        await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
        await page.getByRole('link', { name: 'Add to cart' }).click();
        await page.getByRole('link', { name: 'Cart', exact: true }).click();
    });

    //run once after all tests
    test.afterAll(async () => {
        await browser.close();
        console.log('browser closed')

    })

})

