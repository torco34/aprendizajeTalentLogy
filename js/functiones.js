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
// Hacer un programa que pida por pantalla un número del 1 al 10 y mediante
// un procedimiento muestre por pantalla el número escrito en letras.

const numeroLetra = () => {
  let num = parseInt(prompt("ingresar numero"));
  switch (num) {
    case 1:
      console.log(`Uno `);
      break;
    case 2:
      console.log(`Dos`);
      break;
    case 3:
      console.log(`Tres`);
      break;

    case 4:
      console.log(`Cuatro`);
      break;
    case 5:
      console.log(`Cinco`);
      break;
    case 6:
      console.log(`Seis`);
      break;
    case 7:
      console.log(`Siete`);
      break;
    case 8:
      console.log(`Ocho`);
      break;
    case 9:
      console.log(`Nueve`);
      break;
    case 10:
      console.log(`Diez`);
      break;
    default:
      "";
      console.log(`Numeró no evaluado`);
      break;
  }
};

// numeroLetra();

// EJERCICIO 5
// Hacer un programa que pida por pantalla una temperatura en grados Celsius, muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.
// Celsius a Fahrenheit: F = (9*C)/5 + 32;
// Celsius a Kelvin: K = C + 273.15;

const celsiusAFahrenheit = (celsiusF) => {
  let resultado = (celsiusF * 9) / 5.0 + 32;
  return resultado;
};

const celsiusAKelvin = (celsiusK) => {
  let resultado = celsiusK + 273.15;
  return resultado;
};

let celsiusF = 32;
let resultado = celsiusAFahrenheit(celsiusF);
console.log(` Cº ${celsiusF} = Fº${resultado} `);

let celsiusK = 31;
const gradoKelvin = celsiusAKelvin(celsiusK);
console.log(` Cº ${celsiusK} = ${gradoKelvin} Kº `);

// EJERCICIO 6
// Hacer un programa que muestre una tabla de multiplicar hasta el 20
// de un número cualquiera por pantalla, el número se pedirá en el programa
// principal. Usar procedimiento.
const tablaMultiplicar = () => {
  let num1 = parseInt(prompt("ingresa numero"));
  // let num2 = parseInt(prompt("numero"));
  for (let i = 1; i <= 20; i++) {
    if (num1 === num1) {
      console.log(` ${num1} X ${i}= ${num1 * i} `);
    } else {
      console.log(`No ingreso numero`);
    }
  }
};

// tablaMultiplicar();
// ejercicio 7

// Hacer un programa que muestre 3 números ordenados ascendentemente, utilizando un procedimiento para cada operación.
const ordenNum = () => {
  let num1 = parseInt(prompt("ingresa numero"));
  let num2 = parseInt(prompt("ingresa numero"));
  let num3 = parseInt(prompt("ingresa numero"));
  let ordenMin = Math.min(num1, num2, num3);
  let ordenMay = Math.max(num1, num2, num3);
  let ordenTotal = num1 + num2 + num3 - ordenMin - ordenMay;
  console.log(ordenMin, ordenTotal, ordenMay);
};

ordenNum();
