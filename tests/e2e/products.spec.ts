
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Funcionalidad de los productos', () => {

  // Se ejecuta antes de cada test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Deberia mostrar productos', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.products).toHaveCount(6);
  });

  test('Deberia agregar un producto al carrito', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addFirstProductToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('Deberia abrir el carrito de compra', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addFirstProductToCart();
    await inventoryPage.openCart();

    await expect(page).toHaveURL(/cart/);
  });

});
