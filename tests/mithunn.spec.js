import { test, expect } from '@playwright/test';
import { Mithunn } from '../pages/mithunn.js';

test('Demoblaze login, clicks, buttons, and cart flow should work', async ({ page }) => {
    const demo = new Mithunn(page);

    await demo.goto();

    await demo.login('pavanol', 'test@123');
    await expect(page.locator(demo.userNameLabel)).toBeVisible();
    await expect(page.locator(demo.userNameLabel)).toContainText('pavanol');

    await demo.openCategory('Laptops');
    await expect(page.locator('.card-title a', { hasText: 'Sony vaio i5' })).toBeVisible();

    await demo.selectProduct('Sony vaio i5');
    await expect(page.locator(demo.addToCartButton)).toBeVisible();
    await expect(page.locator(demo.addToCartButton)).toBeEnabled();

    const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        demo.addToCart()
    ]);
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();

    await demo.clickHome();
    await demo.openCategory('Phones');
    await expect(page.locator('.card-title a', { hasText: 'Samsung galaxy s6' })).toBeVisible();

    await demo.clickCart();
    await expect(page).toHaveURL(/.*cart\.html$/);
});
