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
// const c = new Contador();
// console.log(c.getValor());
// c.incrementar();
// console.log(c.getValor());
// c.setValor(10);
// console.log(c.getValor());
// c.decrementar();
// console.log(c.getValor());

//EJERCICIO 3 POO
//Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
//El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
//Crea sus métodos get, set y toString.
//Tendrá dos métodos especiales:
//ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
//retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.

class Cuentas {
  constructor(titular, cantidad = 0) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  getTitular() {
    return this.titular;
  }

  setTitular(titular) {
    this.titular = titular;
  }
  getCantidad() {
    return this.cantidad;
  }

  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }
  //   devuelve un estrin string
  toString() {
    return `Titular: ${this.titular}, Cantidad: ${this.cantidad}`;
  }

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.cantidad += cantidad;
    }
  }
  retirar(cantidad) {
    if (cantidad > 0 && this.cantidad - cantidad >= 0) {
      this.cantidad -= cantidad;
    } else {
      this.cantidad = 0;
    }
  }
}

// const cuenta1 = new Cuentas("Juan Pérez", 1000.5);
// console.log(cuenta1.toString()); // Titular: Juan Pérez, Cantidad: 1000.5

// cuenta1.ingresar(500);
// console.log(cuenta1.toString()); // Titular: Juan Pérez, Cantidad: 1500.5

// cuenta1.retirar(800);
// console.log(cuenta1.toString()); // Titular: Juan Pérez, Cantidad: 700.5

// cuenta1.retirar(1000);
// console.log(cuenta1.toString()); // Titular: Juan Pérez, Cantidad: 0

// EJERCICIO 4 POO
// Realizar un programa que conste de una clase llamada Alumno que tenga como atributos
// el nombre y la nota del alumno. Definir los métodos para inicializar sus atributos,
// imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.´
class Alumno {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }
  datos() {
    console.log(`Nombre del alumno es: ${this.nombre}`);
    console.log(`Nota del alumno es: ${this.nota}`);
  }
  valuarNota() {
    let mensaje = `el alumno ${this.nombre} es: `;
    if (this.nota > 5) {
      mensaje += `Aprobado con una nota de ${this.nota}`;
    } else {
      mensaje += `Suspendido con la nota  ${this.nota}.`;
    }
    console.log(mensaje);
  }
}
const alumno1 = new Alumno("Juan", 5);
// alumno1.datos(); //nombre del alumno y nota
// alumno1.valuarNota();

//EJERCICIO 5 POO
// Realizar un programa que tenga una clase Persona con las siguientes características.
// La clase tendrá como atributos el nombre y la edad de una persona.
// Implementar los métodos necesarios para inicializar los atributos,
// mostrar los datos e indicar si la persona es mayor de edad o no.
//

class Nombre {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  datos() {
    console.log(`la persona ingresada se llama: ${this.nombre}`);
    console.log(`Tiene : ${this.edad} anos`);
  }
  datosMayorOMenor() {
    let mensaje = `La person se llama: ${this.nombre} es:`;
    if (this.edad >= 18) {
      mensaje += `mayor de edad tiene ${this.edad} `;
    } else {
      mensaje += `menor de edad, tiene ${this.edad} `;
    }
    console.log(mensaje);
  }
}

// const mensaje = new Nombre("julian", 19);
// mensaje.datos();
// mensaje.datosMayorOMenor();
