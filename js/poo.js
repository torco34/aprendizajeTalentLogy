// EJERCICIO 1 OBJETOS
//Crea una clase Cuenta con los métodos
// ingreso, reintegro y transferencia.
// La clase contendrá un constructor
// por defecto y los métodos getters y setters.

class Cuenta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  ingreso(cantidad) {
    this.saldo += cantidad;
  }

  reintegro(cantidad) {
    if (cantidad > this.saldo) {
      console.log("No hay suficiente saldo en la cuenta.");
    } else {
      this.saldo -= cantidad;
    }
  }

  transferencia(cantidad, cuentaDestino) {
    if (cantidad > this.saldo) {
      console.log("No hay suficiente saldo en la cuenta.");
    } else {
      this.saldo -= cantidad;
      cuentaDestino.ingreso(cantidad);
    }
  }

  // Getters y Setters
  getSaldo() {
    return this.saldo;
  }

  setSaldo(nuevoSaldo) {
    this.saldo = nuevoSaldo;
  }
}
//EJERCICIO 2 POO
/*Crea una clase Contador con los métodos para incrementar y decrementar el contador. 
La clase contendrá un constructor por defecto y los métodos getters y setters.
 */
class Contador {
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }

  decrementar() {
    this.valor--;
  }
  getValor() {
    return this.valor;
  }
  setValor(nuevoValor) {
    this.valor = nuevoValor;
  }
}
const c = new Contador();
console.log(c.getValor());
c.incrementar();
console.log(c.getValor());
c.setValor(10);
console.log(c.getValor());
c.decrementar();
console.log(c.getValor());
