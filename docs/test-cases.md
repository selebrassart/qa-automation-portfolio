# Casos de Prueba

Este documento contiene los casos de prueba definidos para el proyecto QA Automation Portfolio.

Los casos están organizados por módulo y describen las condiciones, los pasos y los resultados esperados para cada escenario automatizado.

## 1. Login

**Aplicación:** SauceDemo

### TC-LOGIN-01 – Inicio de sesión exitoso

- **Precondición:** El usuario se encuentra en la página de inicio de sesión.
- **Datos de prueba:** standard_user / secret_sauce.
- **Pasos:**
  1. Ingresar un usuario válido.
  2. Ingresar una contraseña válida.
  3. Hacer clic en el botón Login.
- **Resultado esperado:** El usuario inicia sesión correctamente y es redirigido al inventario de productos.
- **Resultado obtenido:** Pass.

### TC-LOGIN-02 – Inicio de sesión con credenciales incorrectas

- **Precondición:** El usuario se encuentra en la página de inicio de sesión.
- **Datos de prueba:** Credenciales incorrectas.
- **Pasos:**
  1. Ingresar un usuario incorrecto.
  2. Ingresar una contraseña incorrecta.
  3. Hacer clic en Login.
- **Resultado esperado:** El sistema impide el acceso y muestra un mensaje de error.
- **Resultado obtenido:** Pass.

### TC-LOGIN-03 – Inicio de sesión con usuario vacío

- **Precondición:** El usuario se encuentra en la página de inicio de sesión.
- **Pasos:**
  1. Dejar vacío el campo de usuario.
  2. Ingresar una contraseña.
  3. Hacer clic en Login.
- **Resultado esperado:** El sistema impide el acceso y muestra un mensaje indicando que el nombre de usuario es obligatorio.
- **Resultado obtenido:** Pass.

### TC-LOGIN-04 – Inicio de sesión con usuario bloqueado

- **Precondición:** El usuario se encuentra en la página de inicio de sesión.
- **Datos de prueba:** locked_out_user / secret_sauce.
- **Pasos:**
  1. Ingresar las credenciales del usuario bloqueado.
  2. Hacer clic en Login.
- **Resultado esperado:** El sistema impide el acceso e informa que el usuario está bloqueado.
- **Resultado obtenido:** Pass.

## 2. Productos

**Aplicación:** SauceDemo

### TC-PROD-01 – Visualización del inventario

- **Precondición:** El usuario inició sesión correctamente.
- **Pasos:**
  1. Acceder a la página de productos.
  2. Verificar el listado de artículos disponibles.
- **Resultado esperado:** Se muestran los 6 productos disponibles.
- **Resultado obtenido:** Pass.

### TC-PROD-02 – Agregar un producto al carrito

- **Precondición:** El usuario se encuentra en el inventario.
- **Pasos:**
  1. Seleccionar la opción para agregar el primer producto al carrito.
  2. Verificar el indicador del carrito.
- **Resultado esperado:** El producto se agrega correctamente y el indicador del carrito muestra 1.
- **Resultado obtenido:** Pass.

### TC-PROD-03 – Acceder al carrito desde el inventario

- **Precondición:** El usuario inició sesión y se encuentra en el inventario.
- **Pasos:**
  1. Hacer clic en el ícono del carrito.
- **Resultado esperado:** El usuario es redirigido a la página del carrito.
- **Resultado obtenido:** Pass.

## 3. Carrito de compras

**Aplicación:** SauceDemo

### TC-CART-01 – Verificar producto agregado al carrito

- **Precondición:** El usuario inició sesión y agregó un producto al carrito.
- **Pasos:**
  1. Acceder al carrito.
  2. Verificar los artículos incluidos.
- **Resultado esperado:** El carrito contiene el producto agregado.
- **Resultado obtenido:** Pass.

### TC-CART-02 – Verificar información del producto

- **Precondición:** El carrito contiene el producto Sauce Labs Backpack.
- **Pasos:**
  1. Acceder al carrito.
  2. Verificar el nombre del producto.
- **Resultado esperado:** Se muestra correctamente el nombre Sauce Labs Backpack.
- **Resultado obtenido:** Pass.

### TC-CART-03 – Continuar al checkout

- **Precondición:** El usuario tiene un producto en el carrito.
- **Pasos:**
  1. Acceder al carrito.
  2. Hacer clic en Checkout.
- **Resultado esperado:** El sistema redirige al formulario de información del comprador.
- **Resultado obtenido:** Pass.

## 4. Checkout

**Aplicación:** SauceDemo

### TC-CHECKOUT-01 – Visualización del formulario

- **Precondición:** El usuario se encuentra en el carrito.
- **Pasos:**
  1. Hacer clic en Checkout.
  2. Verificar los campos del formulario.
- **Resultado esperado:** Se muestran los campos First Name, Last Name y Zip/Postal Code.
- **Resultado obtenido:** Pass.

### TC-CHECKOUT-02 – Validación de nombre vacío

- **Precondición:** El usuario se encuentra en el formulario de checkout.
- **Pasos:**
  1. Dejar vacío el campo First Name.
  2. Completar los demás campos.
  3. Hacer clic en Continue.
- **Resultado esperado:** El sistema muestra un mensaje indicando que el nombre es obligatorio.
- **Resultado obtenido:** Pass.

### TC-CHECKOUT-03 – Validación de apellido vacío

- **Precondición:** El usuario se encuentra en el formulario de checkout.
- **Pasos:**
  1. Completar First Name.
  2. Dejar vacío Last Name.
  3. Completar Zip/Postal Code.
  4. Hacer clic en Continue.
- **Resultado esperado:** El sistema muestra un mensaje indicando que el apellido es obligatorio.
- **Resultado obtenido:** Pass.

### TC-CHECKOUT-04 – Validación de código postal vacío

- **Precondición:** El usuario se encuentra en el formulario de checkout.
- **Pasos:**
  1. Completar First Name y Last Name.
  2. Dejar vacío Zip/Postal Code.
  3. Hacer clic en Continue.
- **Resultado esperado:** El sistema muestra un mensaje indicando que el código postal es obligatorio.
- **Resultado obtenido:** Pass.

### TC-CHECKOUT-05 – Continuar con información válida

- **Precondición:** El usuario se encuentra en el formulario de checkout.
- **Datos de prueba:** Datos de comprador válidos.
- **Pasos:**
  1. Completar First Name.
  2. Completar Last Name.
  3. Completar Zip/Postal Code.
  4. Hacer clic en Continue.
- **Resultado esperado:** El sistema permite continuar y muestra el resumen de la compra.
- **Resultado obtenido:** Pass.

### TC-CHECKOUT-06 – Completar una compra

- **Precondición:** El usuario llegó al resumen de compra con un producto agregado.
- **Pasos:**
  1. Verificar que el producto aparezca en el resumen.
  2. Verificar que se muestre el total.
  3. Hacer clic en Finish.
- **Resultado esperado:** La compra finaliza correctamente y se muestra el mensaje de confirmación "Thank you for your order!".
- **Resultado obtenido:** Pass.

## 5. Pruebas de API

**API:** DummyJSON Products

### TC-API-01 – Obtener un producto por ID

- **Precondición:** La API se encuentra disponible.
- **Endpoint:** GET /products/1
- **Pasos:**
  1. Enviar una solicitud GET al endpoint.
  2. Verificar el código de estado HTTP.
  3. Verificar los datos del producto recibido.
- **Resultado esperado:** La API responde con código 200 y devuelve un producto con ID 1, título y precio válido.
- **Resultado obtenido:** Pass.

### TC-API-02 – Obtener listado de productos

- **Precondición:** La API se encuentra disponible.
- **Endpoint:** GET /products
- **Pasos:**
  1. Enviar una solicitud GET al endpoint.
  2. Verificar el código de estado HTTP.
  3. Verificar que la respuesta contenga productos.
- **Resultado esperado:** La API responde con código 200 y devuelve una lista de productos.
- **Resultado obtenido:** Pass.

### TC-API-03 – Consultar un producto inexistente

- **Precondición:** La API se encuentra disponible.
- **Endpoint:** GET /products/999999
- **Pasos:**
  1. Enviar una solicitud GET al endpoint.
  2. Verificar el código de estado HTTP.
- **Resultado esperado:** La API responde con código 404.
- **Resultado obtenido:** Pass.

---

## Resumen de ejecución

| Módulo | Casos | Resultado |
|---|---:|---|
| Login | 4 | Pass |
| Productos | 3 | Pass |
| Carrito | 3 | Pass |
| Checkout | 6 | Pass |
| API | 3 | Pass |
| **Total** | **19** | **Pass** |

**Nota:** Los resultados corresponden a la última ejecución local registrada del proyecto. Los casos E2E se ejecutan en Chromium, Firefox y WebKit.
