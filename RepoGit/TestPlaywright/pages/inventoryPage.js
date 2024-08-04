// pages/inventoryPage.js
class InventoryPage {
    constructor(page) {
      this.page = page;
      this.inventoryList = page.locator('.inventory_list');
    }
  
    async isInventoryListVisible() {
      return await this.inventoryList.isVisible();
    }
  }
  
  module.exports = InventoryPage;
  