// Primer  ejercicio
const element = document.getElementById("element");

console.log(element);
let addNumber = prompt("Introduce numero");

element.innerHTML = `Has introducido el número ${addNumber} Gracias`;

//Segundo ejercicio

const elementDos = document.getElementById("elementDos");

let precio = prompt("Indruduzca el precio");
let descuento = prompt("Indruduzca el descuento");

const descuentoTotal = Math.abs((precio * descuento) / 100 - precio);

console.log(descuentoTotal);
elementDos.innerHTML = `El precio es de ${precio} y tiene el descuento de ${descuento} el total del precio es de${descuentoTotal}`;
