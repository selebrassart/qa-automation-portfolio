
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Carpeta donde están los tests
  testDir: './tests',

  // Permite ejecutar tests en paralelo
  fullyParallel: true,

  // Evita dejar test.only por accidente en CI
  forbidOnly: !!process.env.CI,

  // Reintenta los tests fallidos en CI
  retries: process.env.CI ? 2 : 0,

  // Configuración de los workers
  workers: process.env.CI ? 2 : 4,

  // Reportes de ejecución
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  // Configuración compartida para todos los navegadores
  use: {
    // URL base de la aplicación que vamos a probar
    baseURL: 'https://www.saucedemo.com',

    // Guarda información para investigar errores
    trace: 'retain-on-failure',

    // Captura pantalla cuando un test falla
    screenshot: 'only-on-failure',
  },

  // Navegadores donde se ejecutarán los tests
  projects: [
  {
    name: 'chromium',
    testMatch: '**/e2e/**/*.spec.ts',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    testMatch: '**/e2e/**/*.spec.ts',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    testMatch: '**/e2e/**/*.spec.ts',
    use: { ...devices['Desktop Safari'] },
  },
  {
    name: 'api',
    testMatch: '**/api/**/*.spec.ts',
  },
],
});
