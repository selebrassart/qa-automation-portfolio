
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Shopping cart', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addFirstProductToCart();
    await inventoryPage.openCart();
  });

  test('Deberia agregar un producto al carrito', async ({ page }) => {
    const cartPage = new CartPage(page);

    await expect(cartPage.cartItems).toHaveCount(1);
  });

  test('Deberia agregar el producto correcto', async ({ page }) => {
    const cartPage = new CartPage(page);

    await expect(cartPage.cartItems).toContainText('Sauce Labs Backpack');
  });

  test('debería dirigirse al proceso de pago', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);
  });

});
