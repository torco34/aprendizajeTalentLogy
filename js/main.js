// Primer  ejercicio
const element = document.getElementById("element");

console.log(element);
// let addNumber = prompt("Introduce numero");

// element.innerHTML = `Has introducido el número ${addNumber} Gracias`;

//segundo ejercicio

const elementDos = document.getElementById("elementDos");

let precio = prompt("Indrudusca el precio");
let descuento = prompt("Indrudusca el descuento");

const descuentoTotal = Math.abs((precio * descuento) / 100 - precio);

console.log(descuentoTotal);
elementDos.innerHTML = `El precio es ${precio} tiene el descuento de ${descuento} el total del precio es ${descuentoTotal}`;


// function descuento(numero, porsentaje) {
//   return Math.abs((numero * porsentaje) / 100 - numero);
// }

// const resultado = descuento(100, 35);

// console.log(`resultado ${resultado}`);
