// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');

test.describe('Sauce Demo Login Tests', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await page.goto('https://www.saucedemo.com');
  });

  test('should log in with standard_user credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await inventoryPage.isInventoryListVisible()).toBe(true);
  });

  test('should show error with incorrect credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    expect(await loginPage.getErrorMessage()).toContain('Username and password do not match any user in this service');
  });

  test('should log in with problem_user credentials and access inventory page', async () => {
    await loginPage.login('problem_user', 'secret_sauce');
    expect(await inventoryPage.isInventoryListVisible()).toBe(true);
  });

  test('should log in with performance_glitch_user credentials and access inventory page', async () => {
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    expect(await inventoryPage.isInventoryListVisible()).toBe(true);
  });
});
