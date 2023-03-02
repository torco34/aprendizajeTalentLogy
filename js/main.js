// DESARROLLO DEL PRIMER EJERCICIO
const inputNumber = document.getElementById("inputNumber");
const element = document.getElementById("element");
const btnNumber = document.getElementById("btnNumber");
function viewNumber(e) {
  e.preventDefault();
  let value = inputNumber.value;

  element.innerHTML = `Has introducido el numero ${value} Gracias`;
}
btnNumber.addEventListener("click", viewNumber);

// SEGUNDO EJERCICIO
const inputProducts = document.getElementById("products");
const inputDiscount = document.getElementById("discount");
const elementDos = document.getElementById("elementDos");
const btn = document.getElementById("btn");
console.log(inputProducts);
function discountPrice(e) {
  e.preventDefault();
  let valueProduct = inputProducts.value;
  let discountProduct = inputDiscount.value;
  const preciTotal = Math.abs(
    (valueProduct * discountProduct) / 100 - valueProduct
  );
  elementDos.innerHTML = `El precio es de 
  ${valueProduct} tiene un descuento de 
  ${discountProduct}%  el precio final con el descuento 
  ${preciTotal}`;
}

btn.addEventListener("click", discountPrice);

// TERCER EJERCICIO

const button = document.getElementById("button");
const input = document.getElementById("input");
const elementTotal = document.getElementById("elemenTotal");

function calculateChange(e) {
  e.preventDefault();
  let dollar = input.value;
  let valueEnd = dollar / 1.3325;
  valueEnd = valueEnd.toFixed(2);
  elementTotal.innerHTML = `Este es el resultado en Euro ${valueEnd}`;
}

button.addEventListener("click", calculateChange);

// CUARTO EJERCICIO
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const num3 = document.getElementById("num3");
// const num4 = document.getElementById("btnMedia");
const numeros = document.getElementsByClassName("num1");
const btnMedia = document.getElementById("btnMedia");

// console.log(numeros[]);
for (let i = 0; i > numeros.length; i++) {
  console.log([i]);
}
function media(e) {
  e.preventDefault();
  let numeross = numeros;
  console.log(numeross[2].value);
}

btnMedia.addEventListener("click", media);

// console.log(numeros);
// let resultadoSuma = num1 + num2;
// let resultadoSuma2 = num3 + num2;
// resulTotal = resultadoSuma + resultadoSuma2;
// const resultadoFinal = resulTotal / 3;
// console.log(resultadoFinal);

//  QUINTO EJERCICIO
const resistencia1 = document.getElementById("resistencia1");
const resistencia2 = document.getElementById("resistencia2");
const elementReq = document.getElementById("elementReq");
const btnResistes = document.getElementById("btnResist");

function sumar(e) {
  e.preventDefault();

  let valor1 = parseInt(resistencia1.value);
  let valor2 = parseInt(resistencia2.value);
  let suma = valor1 + valor2;
  let multiplicacion = valor1 * valor2;

  let resultadoFinal = multiplicacion / suma;

  elementReq.innerHTML = `la suma es ${suma}, la multiplication ${multiplicacion},  el resultado de resistencia equivalente es ${resultadoFinal}`;
}
btnResistes.addEventListener("click", sumar);
