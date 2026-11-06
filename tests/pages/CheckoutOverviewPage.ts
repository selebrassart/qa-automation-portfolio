import type { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly finishButton: Locator;
  readonly total: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item');
    this.finishButton = page.locator('[data-test="finish"]');
    this.total = page.locator('.summary_total_label');
  }

  async finish() {
    await this.finishButton.click();
  }
}
