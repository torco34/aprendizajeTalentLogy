// ejercicio 1
// Determinar si un número es par o no.

const determinarNumero = (num) => {
  let numero = num;
  if (numero % 2 === 0 && numero != 0) {
    console.log(`Numero par ${numero}`);
  } else {
    console.log(`Numero Impar ${numero}`);
  }
  return numero;
};
// console.log(`Numero ingresado ${determinarNumero(13)}`);

// FUNCTION
// Hacer un programa que realice la media aritmética de 2 números.
const arismetic = () => {
  let arr = [12, 34];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let suma = arr[0] + arr[1];
    let resultado = suma / 2;
    arr2.push(resultado);
  }
  return arr2;
};

// console.log(`Resultado ${arismetic()}`);

//EJERCICIO 3
// Hacer un programa que muestre un menú con las opciones sumar, restar, multiplicar y dividir,
// el programa solicitará una opción y realizará la tarea elegida, se debe usar procedimientos.

const boton = document.getElementsByClassName("boton");
const cuerpo = document.getElementById("cuerpo");
// const tapsBody = document.getElementsByClassName("tap");
const taps1 = document.getElementById("tap1");
const taps2 = document.getElementById("tap2");
const taps3 = document.getElementById("tap3");
const taps4 = document.getElementById("tap4");
const suma = document.getElementById("suma");
// console.log(taps);
console.log(boton);
const taps = (e) => {
  e.preventDefault();

  taps1.style.display = "none";
  taps2.style.display = "none";
  taps3.style.display = "none";
  taps4.style.display = "none";
  const link = e.target;
  const cuerpoId = link.dataset.cuerpo;
  console.log(cuerpoId);
  const cuerpo = document.querySelector(cuerpoId);
  cuerpo.style.display = "block";
  const papa = link.parentNode;
  papa.classList.add("active");
};
const sumaInput = (e) => {
  e.preventDefault();
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const element = document.getElementById("element");
  let suma1 = parseInt(input1.value);
  let suma2 = parseInt(input2.value);
  total = suma1 + suma2;
  console.log(total);
  if (total === 0) {
    element.innerHTML = `Suma ${total}`;
  }
  element.innerHTML = `Suma ${total}`;
};

cuerpo.addEventListener("click", taps);
suma.addEventListener("click", sumaInput);
// fuccion de del input sumar
const restar = () => {
  let resta1 = 45;
  let resta2 = 6;
  resultado = resta1 - resta2;
  console.log(resultado);
};
// restar();
const multiplicar = () => {
  let num = 7;
  let num2 = 8;
  multip = num * num2;
  console.log(multip);
};
// multiplicar();

const divicion = () => {
  
  let num1 = 21;
  let num2 = 1;
  if (num1 < num2) {
    divic = num2 / num1;
    console.log(divic);
  } else {
    divic = num1 / num2;
    console.log(divic);
  }
};

// divicion();

//EJERCICIO 4

