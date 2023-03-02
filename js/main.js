// DESARROLLO DEL PRIMER EJERCICIO
const inputNumber = document.getElementById("inputNumber");
const element = document.getElementById("element");
const btnNumber = document.getElementById("btnNumber");
function viewNumber(e) {
  e.preventDefault();
  let value = inputNumber.value;

  element.innerHTML = `Has intruducido el numero ${value} Gracias`;
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
  const preciTatal = Math.abs(
    (valueProduct * discountProduct) / 100 - valueProduct
  );
  elementDos.innerHTML = `El precio es de 
  ${valueProduct} tiene un descuento de 
  ${discountProduct}%  el precio final con el descuento 
  ${preciTotal}`;
}

btn.addEventListener("click", discountPrice);

// CUARTO EJERCICIO

const button = document.getElementById("button");
const input = document.getElementById("input");
const inputTotal = document.getElementById("inputTotal");

function calculateChange(e) {
  e.preventDefault();
  let dollar = input.value * 1;
  let values = 1.3325 * dollar;
  console.log(`dolar ${values}`);
}

button.addEventListener("click", calculateChange);
