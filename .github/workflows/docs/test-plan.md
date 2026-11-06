# Plan de Pruebas

## 1. Introducción

Este documento describe el plan de pruebas del proyecto QA Automation Portfolio, desarrollado con Playwright y TypeScript.

El objetivo es verificar el funcionamiento de las principales funcionalidades de una aplicación web de compras y validar algunos endpoints de una API REST mediante pruebas automatizadas.

Para las pruebas se utilizan dos aplicaciones públicas: SauceDemo para los escenarios End-to-End y DummyJSON para las pruebas de API.

## 2. Objetivos

Los objetivos principales de las pruebas son:

- Verificar el funcionamiento del inicio de sesión.
- Comprobar la visualización de productos y las operaciones del carrito.
- Validar el proceso de compra.
- Comprobar las respuestas de distintos endpoints de la API.
- Detectar posibles errores en los flujos evaluados.
- Ejecutar las pruebas en diferentes navegadores para comprobar su comportamiento.

## 3. Alcance de las pruebas

### Incluido en el alcance

**Pruebas End-to-End (E2E)**

Se prueban los siguientes módulos de SauceDemo:

- Login: inicio de sesión válido e inválido, campos vacíos y usuario bloqueado.
- Productos: visualización del inventario y agregado de productos al carrito.
- Carrito: contenido, información de productos y navegación al checkout.
- Checkout: validaciones del formulario y finalización de una compra.

**Pruebas de API**

Se prueban los siguientes escenarios de DummyJSON:

- Obtener un producto por su ID.
- Obtener el listado de productos.
- Consultar un producto inexistente y verificar la respuesta de error.

### Fuera del alcance

No se incluyen pruebas de:

- Rendimiento y carga.
- Seguridad.
- Accesibilidad.
- Compatibilidad con dispositivos móviles.
- Pruebas de otros módulos o funcionalidades no mencionados anteriormente.

## 4. Aplicaciones bajo prueba

| Aplicación | URL | Tipo de prueba |
|---|---|---|
| SauceDemo | https://www.saucedemo.com/ | E2E |
| DummyJSON | https://dummyjson.com/docs/products | API |

Ambas aplicaciones se utilizan con fines de práctica y aprendizaje.

## 5. Estrategia de pruebas

Se utiliza Playwright Test como herramienta principal de automatización.

Las pruebas se organizan en dos grupos:

**E2E:** permiten simular acciones de un usuario sobre la aplicación web, como iniciar sesión, agregar productos al carrito y completar una compra.

**API:** permiten enviar solicitudes HTTP y verificar los códigos de estado y los datos recibidos en las respuestas.

Para organizar el código de las pruebas E2E se utiliza el patrón Page Object Model (POM), separando los elementos y acciones de cada página de los escenarios de prueba.

## 6. Entorno de pruebas

- Lenguaje: TypeScript.
- Entorno de ejecución: Node.js.
- Framework de automatización: Playwright Test.
- Navegadores E2E: Chromium, Firefox y WebKit.
- API: DummyJSON.
- Control de versiones: Git y GitHub.
- Integración continua: GitHub Actions.

Las pruebas se ejecutan localmente y también mediante un workflow de GitHub Actions.

## 7. Criterios de entrada

Para comenzar la ejecución de las pruebas se requiere:

- Tener instaladas las dependencias del proyecto.
- Contar con los navegadores necesarios de Playwright.
- Tener acceso a las aplicaciones utilizadas.
- Disponer de la configuración del proyecto.

## 8. Criterios de salida

Se considera finalizada una ejecución cuando:

- Se hayan ejecutado todos los escenarios definidos.
- Los resultados de las pruebas estén disponibles.
- Se hayan identificado y revisado los casos fallidos, si los hubiera.

Un test fallido debe analizarse antes de determinar si existe un defecto en la aplicación o un problema en la propia automatización.

## 9. Casos de prueba

La suite contiene 19 escenarios automatizados:

| Módulo | Cantidad de escenarios |
|---|---:|
| Login | 4 |
| Productos | 3 |
| Carrito | 3 |
| Checkout | 6 |
| API | 3 |
| **Total** | **19** |

Los escenarios E2E se ejecutan en Chromium, Firefox y WebKit. Las pruebas de API se ejecutan una sola vez mediante un proyecto independiente de Playwright.

## 10. Resultados

En la última ejecución local se obtuvieron los siguientes resultados:

- 51 ejecuciones.
- 51 pruebas exitosas.
- 0 pruebas fallidas.

Los resultados pueden consultarse mediante el reporte HTML generado por Playwright.

---

**Proyecto:** QA Automation Portfolio  
**Herramienta:** Playwright  
**Autora:** Selene Brassart
