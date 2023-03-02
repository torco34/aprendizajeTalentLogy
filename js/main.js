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

// CUARTO EJERCICO

const num1 = 40;
const num2 = 50;
const num3 = 60;

let resultadoSuma = num1 + num2;
resulTotal = resultadoSuma + num1;

const resultadoFinal = resulTotal / 3;

console.log(resultadoFinal);
//  QUINTO EJERCICIO































