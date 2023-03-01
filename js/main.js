// Primer  ejercicio
// const element = document.getElementById("element");

// console.log(element);
// let addNumber = prompt("Introduce numero");

// element.innerHTML = `Has introducido el número ${addNumber} Gracias`;

//Segundo ejercicio

// const elementDos = document.getElementById("elementDos");

// let precio = prompt("Indruduzca el precio");
// let descuento = prompt("Indruduzca el descuento");

// const descuentoTotal = Math.abs((precio * descuento) / 100 - precio);

// elementDos.innerHTML = `El precio es de ${precio} y tiene el descuento de ${descuento} el total del precio es de ${descuentoTotal}`;

// // el mismo ejercicio con function

// function descuento(numero, porsentaje) {
//   return Math.abs((numero * porsentaje) / 100 - numero);
// }

// const resultado = descuento(100, 35);

// console.log(`resultado ${resultado}`);

// CUARTO EJERCICIO

const botton = document.getElementById("button");
const input = document.getElementById("input");
const inputTotal = document.getElementById("inputTotal");
console.log(input);

function saberPrecio(e) {
  e.preventDefault();

  const dolar = input.value * 1;

  const volores = 1.3325 * dolar;

  console.log(`dolar ${volores}`);
}

botton.addEventListener("click", saberPrecio);
