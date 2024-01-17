// Vista
class CalculadoraVista {
    actualizarVista(modelo) {
      const resultadoElement = document.getElementById('resultado');
      resultadoElement.innerText = `${modelo.numero1} ${modelo.operacion} ${modelo.numero2} = ${modelo.resultado}`;
    }
  }
  