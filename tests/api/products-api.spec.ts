import { test, expect } from '@playwright/test';

test.describe('Products API', () => {

  test('debería obtener un producto con éxito', async ({ request }) => {

    // Enviar solicitud GET
    const response = await request.get(
      'https://dummyjson.com/products/1'
    );

    // Verificar status HTTP
    expect(response.status()).toBe(200);

    // Obtener el cuerpo de la respuesta
    const product = await response.json();

    // Verificar los datos recibidos
    expect(product.id).toBe(1);
    expect(product.title).toBeTruthy();
    expect(product.price).toBeGreaterThan(0);
  });

  test('deberia obtener lista de productos', async ({ request }) => {

    const response = await request.get(
      'https://dummyjson.com/products'
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.products.length).toBeGreaterThan(0);
  });

  test('deberia devolver 404 por producto no existente', async ({ request }) => {

    const response = await request.get(
      'https://dummyjson.com/products/999999'
    );

    expect(response.status()).toBe(404);
  });

});
