// Modelo
class CalculadoraModel {
    constructor() {
      this.nombre = '';
      this.numero1 = 0;
      this.numero2 = 0;
      this.resultado = 0;
      this.operacion = '';
    }
  
    realizarOperacion() {
      switch (this.operacion) {
        case '+':
          this.resultado = this.numero1 + this.numero2;
          break;
        case '-':
          this.resultado = this.numero1 - this.numero2;
          break;
        case '*':
          this.resultado = this.numero1 * this.numero2;
          break;
        case '/':
          this.resultado = this.numero1 / this.numero2;
          break;
        default:
          this.resultado = 0;
          break;
      }
    }
  
    limpiar() {
      this.numero1 = 0;
      this.numero2 = 0;
      this.resultado = 0;
      this.operacion = '';
    }
  }
  