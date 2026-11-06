
# Ejemplo de Reporte de Bug

Este documento presenta un ejemplo de cómo registrar y documentar un defecto encontrado durante una prueba de software.

El escenario es hipotético y se utiliza únicamente con fines de práctica.

## BUG-001 – El carrito no actualiza la cantidad de productos agregados

| Campo | Detalle |
|---|---|
| ID | BUG-001 |
| Título | El indicador del carrito no actualiza la cantidad de productos |
| Aplicación | SauceDemo |
| Módulo | Productos / Carrito |
| Entorno | Navegador web |
| Severidad | Media |
| Prioridad | Media |
| Estado | Abierto |
| Tipo | Funcional |

### Descripción

Al agregar un producto al carrito, el indicador de cantidad debería actualizarse para reflejar los artículos agregados.

En este escenario hipotético, el indicador permanece en cero aunque el producto haya sido agregado correctamente.

### Precondiciones

- El usuario inició sesión correctamente.
- El usuario se encuentra en la página de inventario.
- El carrito se encuentra inicialmente vacío.

### Pasos para reproducir

1. Iniciar sesión en SauceDemo.
2. Acceder al inventario de productos.
3. Seleccionar un producto.
4. Hacer clic en el botón "Add to cart".
5. Observar el indicador del carrito.

### Resultado esperado

El indicador del carrito debería mostrar la cantidad de productos agregados.

Por ejemplo, al agregar un producto debería mostrar el número 1.

### Resultado actual

El indicador permanece en cero después de agregar el producto.

### Evidencia

Para un reporte real se adjuntaría una captura de pantalla o una grabación que permita observar el comportamiento.

### Impacto

El usuario no puede identificar fácilmente cuántos productos agregó al carrito desde la pantalla de inventario.

### Observaciones

Este reporte es un ejemplo de documentación y no representa un defecto verificado en SauceDemo.
