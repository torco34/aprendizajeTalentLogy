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
const tapsBody = document.getElementsByClassName("tap");
const taps1 = document.getElementById("tap1");
const taps2 = document.getElementById("tap2");
const taps3 = document.getElementById("tap3");
const taps4 = document.getElementById("tap4");
// console.log(taps);
console.log(boton);
const menu1 = () => {
  tapsBody[0].style.display = "block";
  tapsBody[1].style.display = "none";
  tapsBody[2].style.display = "none";
  tapsBody[3].style.display = "none";
};

const menu2 = () => {
  tapsBody[0].style.display = "none";
  tapsBody[1].style.display = "block";
  tapsBody[2].style.display = "none";
  tapsBody[3].style.display = "none";
  
};

const menu3 = () => {
  tapsBody[0].style.display = "none";
  tapsBody[1].style.display = "none";
  tapsBody[2].style.display = "block";
  tapsBody[3].style.display = "none";
};

const menu4 = () => {
  tapsBody[0].style.display = "none";
  tapsBody[1].style.display = "none";
  tapsBody[2].style.display = "none";
  tapsBody[3].style.display = "block";
};

// cuerpo.addEventListener("click", menu);
taps1.addEventListener("click", menu1);
taps2.addEventListener("click", menu2);
taps3.addEventListener("click", menu3);
taps4.addEventListener("click", menu4);
