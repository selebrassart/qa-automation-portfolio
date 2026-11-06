import type { Page, Locator } from '@playwright/test';

export class InventoryPage {   //clase para representar la pantalla donde aparecen los productos.
  readonly page: Page;
  readonly products: Locator;
  readonly cartBadge: Locator;
  readonly firstAddButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.products = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.firstAddButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
  }

  async addFirstProductToCart() {
    await this.firstAddButton.click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
