const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const InventoryPage = require('../pageObjects/InventoryPage');

test.describe('Swag Labs E2E Tests', () => {
    test('should login as standard_user and see inventory', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(inventoryPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('should fail to login as locked_out_user', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toBeVisible(); // Ensure that errorMessage is the correct Locator// Upewnij się, że errorMessage jest odpowiednim Locator
    });
});


