const { expect } = require('@playwright/test');

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
    }

    async isLoaded() {
        await expect(this.inventoryItems).toHaveCount(6);
    }
}

module.exports = InventoryPage;
