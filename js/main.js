// DESARROLLO DEL PRIMER EJERCICIO
const inputNumber = document.getElementById("inputNumber");
const element = document.getElementById("element");
const btnNumber = document.getElementById("btnNumber");
function viewNumber(e) {
  e.preventDefault();
  let value = inputNumber.value;

  element.innerHTML = `Has introducido el numero ${value} `;
}
btnNumber.addEventListener("click", viewNumber);

// SEGUNDO EJERCICIO introducido 
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

const numeros = document.getElementsByClassName("num1");
const btnMedia = document.getElementById("btnMedia");
const elementMedia = document.getElementById("elementMedia");

function imprimirMedia(e) {
  e.preventDefault();
  let sum1 = parseInt(numeros[0].value);
  let sum2 = parseInt(numeros[1].value);
  let sum3 = parseInt(numeros[2].value);
  let sum4 = parseInt(numeros[3].value);

  const sumaTotal = sum1 + sum2 + sum3 + sum4;
  let media = sumaTotal / 4;

  elementMedia.innerHTML = `La media es la ${media}, la suma de los cuatro numero es ${sumaTotal}`;
}

btnMedia.addEventListener("click", imprimirMedia);

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

  elementReq.innerHTML = ` la multiplication ${multiplicacion} la suma es ${suma},  el resultado de resistencia equivalente es ${resultadoFinal}`;
}
btnResistes.addEventListener("click", sumar);
