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

//EJERCICO 6 POO
//Desarrollar un programa que cargue los datos de un triángulo.
//Implementar una clase con los métodos para inicializar los atributos,
//imprimir el valor del lado con un tamaño mayor y  el tipo de triángulo que es
//(equilátero, isósceles o escaleno).

class Triangulo {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  ladoMayor() {
    if (this.a >= this.b && this.a >= this.c) {
      return this.a;
    } else if (this.b >= this.a && this.b >= this.c) {
      return this.b;
    } else {
      return this.c;
    }
  }
  tipoTriangulo() {
    if (this.a === this.b && this.b === this.c) {
      return "Equilátero";
    } else if (this.a === this.b || this.a === this.c || this.b === this.c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
}
// const triangulo = new Triangulo(3, 4, 5);
// console.log(`El lado mayor es: ${triangulo.ladoMayor()}`);
// console.log(`El triángulo es de tipo: ${triangulo.tipoTriangulo()}`);

//ejercicio 7
//Realizar una clase que administre una
//agenda. Se debe almacenar para cada contacto
// el nombre, el teléfono y el email. Además deberá
//mostrar un menú con las siguientes opciones
//Añadir contacto
//Lista de contactos
//Buscar contacto
//Editar contacto
//Cerrar agenda

class Agenda {
  constructor() {
    this.contactos = [];
  }
  // añadir contacto
  agregarContacto(nombre, telefono, email) {
    this.contactos.push({
      nombre: nombre,
      telefono: telefono,
      email: email,
    });
    console.log("Contacto añadido con éxito.");
  }
  //  mostrar la lista de contactos
  mostrarContactos() {
    if (this.contactos.length === 0) {
      console.log("No hay contactos en la agenda.");
    } else {
      console.log("Lista de contactos:");
      this.contactos.forEach((contacto) => {
        console.log(
          `- ${contacto.nombre}, ${contacto.telefono}, ${contacto.email}`
        );
      });
    }
  }

  // Método para buscar un contacto por nombre
  buscarContacto(nombre) {
    // find de vuelve según condición en este caso nombre
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(
        `Contacto encontrado: ${contactoEncontrado.nombre}, ${contactoEncontrado.telefono}, ${contactoEncontrado.email}`
      );
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }
  // Método para editar un contacto por nombre
  editarContacto(nombre, nuevoTelefono, nuevoEmail) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      contactoEncontrado.telefono = nuevoTelefono;
      contactoEncontrado.email = nuevoEmail;
      console.log(`Contacto ${nombre} actualizado con éxito.`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }
  // Método para mostrar el menú de opciones
  mostrarMenu() {
    console.log("");
    console.log("Seleccione una opción:");
    console.log("1. Añadir contacto");
    console.log("2. Lista de contactos");
    console.log("3. Buscar contacto");
    console.log("4. Editar contacto");
    console.log("5. Cerrar agenda");
  }
}
// Ejemplo de uso de la clase Agenda
const miAgenda = new Agenda();

miAgenda.mostrarMenu();

// Supongamos que el usuario selecciona la opción 1 para añadir un contacto
miAgenda.agregarContacto("Juan Pérez", "123456789", "juan.perez@example.com");

// Supongamos que el usuario selecciona la opción 2 para mostrar la lista de contactos
miAgenda.mostrarContactos();

// Supongamos que el usuario selecciona la opción 3 para buscar un contacto por nombre
miAgenda.buscarContacto("Juan Pérez");

// Supongamos que el usuario selecciona la opción 4 para editar un contacto por nombre
miAgenda.editarContacto(
  "Juan Pérez",
  "987654321",
  "juan.perez.new@example.com"
);

// Supongamos que el usuario selecciona la opción 5 para cerrar la agenda
console.log("Agenda cerrada.");

//EJERCICIO 8
//Realizar un programa en el cual se declaran dos valores
// enteros por teclado utilizando el método constructor. Calcular
// después la suma, resta, multiplicación y división. Utilizar un método
// para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.

class Calculadora {
  constructor(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
  }

  sumar() {
    return this.valor1 + this.valor2;
  }

  restar() {
    return this.valor1 - this.valor2;
  }

  multiplicar() {
    return this.valor1 * this.valor2;
  }

  dividir() {
    if (this.valor2 === 0) {
      return "No se puede dividir por cero";
    } else {
      return this.valor1 / this.valor2;
    }
  }
}

// const valor1 = parseInt(prompt("Ingrese el primer valor entero: "));
// const valor2 = parseInt(prompt("Ingrese el segundo valor entero: "));

// const calculadora = new Calculadora(valor1, valor2);

// console.log("Suma:", calculadora.sumar());
// console.log("Resta:", calculadora.restar());
// console.log("Multiplicación:", calculadora.multiplicar());
// console.log("División:", calculadora.dividir());
