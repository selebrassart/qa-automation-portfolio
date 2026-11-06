
# QA Automation Portfolio

Proyecto de automatización de pruebas desarrollado con **Playwright y TypeScript**, enfocado en pruebas End-to-End (E2E) y pruebas de API REST.

El objetivo es demostrar conocimientos de automatización, diseño de casos de prueba, uso de Page Object Model y ejecución de pruebas en distintos navegadores.

## Tecnologías utilizadas

- Playwright Test
- TypeScript
- Node.js
- Pruebas E2E
- Pruebas de API REST
- Page Object Model (POM)
- GitHub Actions

## Estructura del proyecto

```text
qa-automation-portfolio/
├── tests/
│   ├── api/
│   │   └── products-api.spec.ts
│   ├── e2e/
│   │   ├── login.spec.ts
│   │   ├── products.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   └── pages/
│       ├── LoginPage.ts
│       ├── InventoryPage.ts
│       ├── CartPage.ts
│       ├── CheckoutPage.ts
│       ├── CheckoutOverviewPage.ts
│       └── CheckoutCompletePage.ts
├── .github/
│   └── workflows/
│       └── playwright.yml
├── playwright.config.ts
├── package.json
└── README.md
```

## Pruebas automatizadas

### 1. Pruebas End-to-End (E2E)

Aplicación utilizada: [SauceDemo](https://www.saucedemo.com/)

Se automatizaron los siguientes escenarios:

**Inicio de sesión**
- Inicio de sesión exitoso.
- Inicio de sesión con credenciales incorrectas.
- Validación de campos vacíos.
- Validación de usuario bloqueado.

**Productos**
- Visualización del listado de productos.
- Agregar un producto al carrito.
- Acceder al carrito de compras.

**Carrito**
- Verificar que los productos agregados se muestren correctamente.
- Verificar la información del producto.
- Continuar al proceso de compra.

**Checkout**
- Visualización del formulario de compra.
- Validación de campos obligatorios.
- Continuar con información válida.
- Completar el proceso de compra.

### 2. Pruebas de API

API utilizada: [DummyJSON Products API](https://dummyjson.com/docs/products)

Se automatizaron los siguientes escenarios:

- Obtener un producto por su identificador.
- Obtener el listado de productos.
- Verificar la respuesta ante la búsqueda de un producto inexistente.

## Ejecución en distintos navegadores

Las pruebas E2E se ejecutan en:

- Chromium
- Firefox
- WebKit

Las pruebas de API se ejecutan una sola vez mediante un proyecto independiente de Playwright.

## Instalación

Requisitos:
- Node.js
- npm

Clonar el repositorio:

```bash
git clone https://github.com/selebrassart/qa-automation-portfolio.git
cd qa-automation-portfolio
```

Instalar dependencias:

```bash
npm install
```

Instalar los navegadores de Playwright:

```bash
npx playwright install
```

## Ejecución de pruebas

Ejecutar todas las pruebas:

```bash
npm test
```

Ejecutar pruebas E2E:

```bash
npm run test:e2e
```

Ejecutar pruebas de API:

```bash
npm run test:api
```

Ejecutar pruebas únicamente en Chromium:

```bash
npm run test:chromium
```

Abrir el modo interactivo de Playwright:

```bash
npm run test:ui
```

Visualizar el reporte HTML:

```bash
npm run report
```

## Resultados

La suite cuenta con:

- 16 escenarios de pruebas E2E.
- 3 escenarios de pruebas de API.
- 51 ejecuciones considerando los navegadores configurados.

En la última ejecución local, todos los tests finalizaron correctamente.

## Integración continua (CI)

El proyecto utiliza **GitHub Actions** para ejecutar automáticamente las pruebas ante cada push y pull request dirigidos a las ramas `main` o `master`.

El workflow instala las dependencias, configura los navegadores, ejecuta la suite y guarda el reporte HTML como artefacto.

## Autora

**Selene Brassart**

Estudiante de Ingeniería en Sistemas de Información | QA y Desarrollo de Software
