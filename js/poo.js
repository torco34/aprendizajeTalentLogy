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
// console.log();
const cantidad = new Cuenta(200);
const reintegro = new Cuenta(300);
console.log(cantidad);
console.log(reintegro);
