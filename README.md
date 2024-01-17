# Calculadora con MVC (Modelo-Vista-Controlador)

## Descripción
Este proyecto implementa una calculadora simple utilizando el patrón de diseño Modelo-Vista-Controlador (MVC). La aplicación está desarrollada en HTML, CSS y JavaScript, y utiliza este patrón para organizar la lógica de manera estructurada y modular.

## Estructura del Proyecto

### Modelo (modelo.js)
- **CalculadoraModel**: La clase que representa el modelo de la calculadora.
  - Propiedades: `nombre`, `numero1`, `numero2`, `resultado`, `operacion`.
  - Métodos: `realizarOperacion()`, `limpiar()`.

### Vista (vista.js)
- **CalculadoraVista**: La clase que representa la vista de la calculadora.
  - Métodos: `actualizarVista(modelo)`.

### Controlador (controlador.js)
- **CalculadoraControlador**: La clase que representa el controlador de la calculadora.
  - Propiedades: `modelo`, `vista`, `numeroActual`.
  - Métodos: `actualizarNombre(nombre)`, `agregarNumero(numero)`, `agregarOperacion(operacion)`, `limpiar()`, `calcular()`.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa tu nombre.
3. Utiliza los botones numéricos y de operación para realizar cálculos.
4. Visualiza los resultados en la pantalla.

## MVC (Modelo-Vista-Controlador)

### Modelo
El modelo (`CalculadoraModel`) gestiona los datos y la lógica de negocio de la calculadora. Almacena el nombre del usuario, los números involucrados en las operaciones, el resultado y la operación actual. El modelo también incluye métodos para realizar operaciones y limpiar los datos.

### Vista
La vista (`CalculadoraVista`) se encarga de presentar la información al usuario. En este proyecto, la vista actualiza el elemento `#resultado` con el resultado de la operación realizada.

### Controlador
El controlador (`CalculadoraControlador`) maneja las interacciones del usuario y actúa como intermediario entre la vista y el modelo. Asocia eventos a funciones específicas para actualizar el modelo y la vista según sea necesario.

## Elaborado por:
Ricardo Rivadeneira
