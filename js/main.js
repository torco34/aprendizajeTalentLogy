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

const btn2 = document.getElementById("btn2");

function discountPrice(e) {
  e.preventDefault();
  const element2 = document.getElementById("element2");
  const inputProduct = document.getElementById("products2");
  const inputDiscount = document.getElementById("discount2");
  let valueProduct = inputProduct.value;
  let discountProduct = inputDiscount.value;
  const preciTotal = Math.abs(
    (valueProduct * discountProduct) / 100 - valueProduct
  );
  element2.innerHTML = `El precio es de 
  ${valueProduct} tiene un descuento de 
  ${discountProduct}%  el precio final con el descuento 
  ${preciTotal}`;
  inputProduct.value = "";
  inputDiscount.value = "";
}

btn2.addEventListener("click", discountPrice);

// TERCER EJERCICIO

const button3 = document.getElementById("button3");
function calculateChange(e) {
  e.preventDefault();
  const element3 = document.getElementById("element3");
  const input = document.getElementById("input3");
  dollar = input.value;
  let valueEnd = dollar / 1.3325;
  valueEnd = valueEnd.toFixed(2);
  element3.innerHTML = `Este es el resultado en Euro ${valueEnd}`;
  input.value = "";
}

button3.addEventListener("click", calculateChange);

// CUARTO EJERCICIO

const btn4 = document.getElementById("btn4");

function imprimirMedia(e) {
  e.preventDefault();
  const numeros = document.getElementsByClassName("num1");
  const element4 = document.getElementById("element4");
  let sum1 = parseInt(numeros[0].value);
  let sum2 = parseInt(numeros[1].value);
  let sum3 = parseInt(numeros[2].value);
  let sum4 = parseInt(numeros[3].value);
  const sumaTotal = sum1 + sum2 + sum3 + sum4;
  let media = sumaTotal / 4;

  element4.innerHTML = `La media es la ${media}, la suma de los cuatro numero es ${sumaTotal}`;
  numeros[0].value = "";
  numeros[1].value = "";
  numeros[2].value = "";
  numeros[3].value = "";
}

btn4.addEventListener("click", imprimirMedia);

//  QUINTO EJERCICIO

const btn5 = document.getElementById("btn5");

function sumar(e) {
  e.preventDefault();
  const resistencia1 = document.getElementById("resistencia1");
  const resistencia2 = document.getElementById("resistencia2");
  const element5 = document.getElementById("element5");
  let valor1 = parseInt(resistencia1.value);
  let valor2 = parseInt(resistencia2.value);
  let suma = valor1 + valor2;
  let multiplicación = valor1 * valor2;
  let resultadoFinal = multiplicación / suma;
  element5.innerHTML = ` la multiplication ${multiplicación} la suma es ${suma},  el resultado de resistencia equivalente es ${resultadoFinal}`;

  resistencia1.value = "";
  resistencia2.value = "";
}
btn5.addEventListener("click", sumar);
