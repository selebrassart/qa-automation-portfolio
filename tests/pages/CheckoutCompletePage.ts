import type { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.completeMessage = page.locator('[data-test="complete-header"]');
  }
}
