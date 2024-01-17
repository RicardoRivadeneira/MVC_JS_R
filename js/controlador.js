// Controlador
class CalculadoraControlador {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
      this.numeroActual = '';
  
      // Asociar eventos a los botones
      document.getElementById('nombre').addEventListener('input', (event) => this.actualizarNombre(event.target.value));
    }
  
    actualizarNombre(nombre) {
      this.modelo.nombre = nombre;
    }
  
    agregarNumero(numero) {
      this.numeroActual += numero;
      document.getElementById('pantalla').value = this.numeroActual;
    }
  
    agregarOperacion(operacion) {
      if (this.numeroActual !== '') {
        this.modelo.operacion = operacion;
        this.modelo.numero1 = parseFloat(this.numeroActual);
        this.numeroActual = '';
        document.getElementById('pantalla').value = operacion;
      }
    }
  
    limpiar() {
      this.numeroActual = '';
      this.modelo.limpiar();
      document.getElementById('pantalla').value = '';
      document.getElementById('resultado').innerText = ''; // Limpiar el resultado anterior
    }
  
    calcular() {
      if (this.numeroActual !== '') {
        this.modelo.numero2 = parseFloat(this.numeroActual);
        this.modelo.realizarOperacion();
        this.vista.actualizarVista(this.modelo);
        this.numeroActual = '';
        document.getElementById('pantalla').value = '';
      }
    }
  }
  
  // Crear instancias de Modelo, Vista y Controlador
  const modelo = new CalculadoraModel();
  const vista = new CalculadoraVista();
  const controlador = new CalculadoraControlador(modelo, vista);
  