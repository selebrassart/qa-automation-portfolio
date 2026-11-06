import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

test.describe('Checkout functionality', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addFirstProductToCart();
    await inventoryPage.openCart();

    await cartPage.checkout();
  });

  test('debe mostrar el formulario de información de pago', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await expect(checkoutPage.firstNameInput).toBeVisible();
    await expect(checkoutPage.lastNameInput).toBeVisible();
    await expect(checkoutPage.postalCodeInput).toBeVisible();
  });

  test('Deberia mostrar error si first name es vacio', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillInformation('', 'Brassart', '2000');
    await checkoutPage.continue();

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('First Name is required');
  });

  test('deberia mostrar error si last name es vacio', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillInformation('Selene', '', '2000');
    await checkoutPage.continue();

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('Last Name is required');
  });

  test('deberia mostrar error cuando codigo postal es vacio', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillInformation('Selene', 'Brassart', '');
    await checkoutPage.continue();

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('Postal Code is required');
  });

  test('deberia continuar si la informacion es valida', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillInformation('Selene', 'Brassart', '2000');
    await checkoutPage.continue();

    await expect(page).toHaveURL(/checkout-step-two/);
  });

  test('debería completar una compra con éxito', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);

  // Completar información personal
  await checkoutPage.fillInformation('Selene', 'Brassart', '2000');
  await checkoutPage.continue();

  // Verificar el resumen de compra
  const overviewPage = new CheckoutOverviewPage(page);

  await expect(overviewPage.cartItems).toHaveCount(1);
  await expect(overviewPage.cartItems).toContainText('Sauce Labs Backpack');
  await expect(overviewPage.total).toBeVisible();

  // Finalizar compra
  await overviewPage.finish();

  // Verificar confirmación
  const completePage = new CheckoutCompletePage(page);

  await expect(completePage.completeMessage)
    .toHaveText('Thank you for your order!');
});

});
