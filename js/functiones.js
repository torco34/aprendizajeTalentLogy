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
  const cuerpo = document.querySelector(cuerpoId);
  cuerpo.style.display = "block";
  const papa = link.parentNode;
  papa.classList.add("active");
};
// funcion de sumar
const sumaInput = (e) => {
  e.preventDefault();
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const element = document.getElementById("element");
  let suma1 = parseInt(input1.value);
  let suma2 = parseInt(input2.value);
  total = suma1 + suma2;
  element.innerHTML = ` suma es ${total}`;
};

cuerpo.addEventListener("click", taps);
suma.addEventListener("click", sumaInput);
// fuccion de del input sumar
// FUNCION DE RESTA
const restaBoton = document.getElementById("resta");
const restar = (e) => {
  e.preventDefault();
  const resta1 = document.getElementById("resta1");
  const resta2 = document.getElementById("resta2");
  const element = document.getElementById("elementRest");
  let input1 = parseInt(resta1.value);
  let input2 = parseInt(resta2.value);
  resultado = input1 - input2;
  console.log(resultado);
  element.innerHTML = ` suma es ${resultado}`;
};
restaBoton.addEventListener("click", restar);
// TERMINA FUNCION DE RESTAS
// MULTIPLICACIÓN EJERCICIO
const multBoton = document.getElementById("multButon");
const multiplicar = (e) => {
  e.preventDefault();
  const inputMult1 = document.getElementById("inputMult1");
  const inputMult2 = document.getElementById("inputMult2");
  const elementMult = document.getElementById("elementMult");
  let input1 = parseInt(inputMult1.value);
  let input2 = parseInt(inputMult2.value);
  multip = input1 * input2;
  elementMult.innerHTML = ` La multiplicación es ${multip}`;
};
multBoton.addEventListener("click", multiplicar);
// multiplicar();
// DIVICION EJERCICIO
const diviBoton = document.getElementById("diviBoton");
const divicion = (e) => {
  e.preventDefault();
  const divici1 = document.getElementById("divici1");
  const divici2 = document.getElementById("divici2");
  const elementDivici = document.getElementById("elementDiv");
  let inputDi = parseInt(divici1.value);
  let inputDiv = parseInt(divici2.value);
  resultado = inputDi / inputDiv;
  elementDivici.innerHTML = ` Resultado  ${resultado}`;
};
diviBoton.addEventListener("click", divicion);

//EJERCICIO 4
// Hacer un programa que pida por pantalla un número del 1 al 10 y mediante
// un procedimiento muestre por pantalla el número escrito en letras.
const button = document.getElementById("boton");
const numeroLetra = (e) => {
  e.preventDefault();
  const element = document.getElementById("elemento");
  let num = parseInt(prompt("Ingresar numero"));
  console.log(num);
  switch (num) {
    case 1:
      element.innerHTML = ` Uno`;

      break;
    case 2:
      element.innerHTML = ` Dos`;
      break;
    case 3:
      element.innerHTML = ` Tres`;
      break;

    case 4:
      element.innerHTML = ` Cuatro`;

      break;
    case 5:
      element.innerHTML = ` Cinco`;
      break;
    case 6:
      element.innerHTML = `Seis`;
      break;
    case 7:
      element.innerHTML = ` Siete`;

      break;
    case 8:
      element.innerHTML = `Ocho`;

      break;
    case 9:
      element.innerHTML = ` Nueve`;
      break;
    case 10:
      element.innerHTML = ` Diez`;

      break;
    default:
      element.innerHTML = `Numeros no validos`;

      break;
  }
};
button.addEventListener("click", numeroLetra);
// numeroLetra();

// EJERCICIO 5
// Hacer un programa que pida por pantalla una temperatura en grados Celsius,
//  muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente
// por pantalla, utilizando funciones.
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

const botCelsios = document.getElementById("botCelsios");

function mostrarCelsiousAFahrenhrenheit(e) {
  e.preventDefault();
  let elementGr = document.getElementById("elementGr");
  const gradoCelsious = parseInt(prompt(`Celsius`));
  let resultado = celsiusAFahrenheit(gradoCelsious);
  elementGr.innerHTML = `Cº ${gradoCelsious} = Fº ${resultado} `;
}

botCelsios.addEventListener("click", mostrarCelsiousAFahrenhrenheit);

const botKelvin = document.getElementById("botKelvin");
function mostrarCelsiousAKelvin(e) {
  e.preventDefault();
  let elementGr = document.getElementById("elementGr");
  const celsiusK = parseInt(prompt(`Celsius a kelvin`));
  const gradoKelvin = celsiusAKelvin(celsiusK);

  elementGr.innerHTML = ` Cº ${celsiusK} = ${gradoKelvin} Kº `;
}
botKelvin.addEventListener("click", mostrarCelsiousAKelvin);

// EJERCICIO 6
// Hacer un programa que muestre una tabla de multiplicar hasta el 20
// de un número cualquiera por pantalla, el número se pedirá en el programa
// principal. Usar procedimiento.
const tabla = document.getElementById("tabla");
const elementTabla = document.getElementById("elementTabla");
const tablaMultiplicar = () => {
  let num1 = parseInt(prompt("ingresa numero"));

  for (let i = 1; i <= 20; i++) {
    elementTabla.innerHTML += `<p>${num1} X ${i}= ${num1 * i} </p>`;
  }
};
tabla.addEventListener("click", tablaMultiplicar);

// ejercicio 7

// Hacer un programa que muestre 3 números ordenados ascendentemente,
// utilizando un procedimiento para cada operación.

// ordenNum();
// let nu1 = parseInt(prompt("ingresa numero 1"));
// let nu2 = parseInt(prompt("ingresa numero 2"));
// let nu3 = parseInt(prompt("ingresa numero 4"));

const ordenNum1 = () => {
  let nu1 = 5;
  return nu1;
};

const ordenNum2 = () => {
  let nu2 = 4;
  return nu2;
};

const ordenNum3 = () => {
  let nu3 = 6;
  return nu3;
};

const ordenMayor = () => {
  let ordenMay = Math.max(ordenNum1(), ordenNum2(), ordenNum3());
  return ordenMay;
};
const ordenMenor = () => {
  let ordenMin = Math.min(ordenNum1(), ordenNum2(), ordenNum3());
  let ordenMay = Math.max(ordenNum1(), ordenNum2(), ordenNum3());
  let ordenNumeros =
    ordenNum1() + ordenNum2() + ordenNum3() - ordenMin - ordenMay;
  return ordenNumeros;
};
const ordenMinimo = () => {
  let ordenMin = Math.min(ordenNum1(), ordenNum2(), ordenNum3());
  return ordenMin;
};
console.log(ordenMinimo());
console.log(ordenMenor());
console.log(ordenMayor());

// const resultadoNum = () => {
//   let num1 = ordenNum1();
//   let num2 = ordenNum2();
//   let num3 = ordenNum3();
//   console.log(num1, num2, num3);
//   let sumaTotal = num1 + num2 + num3;
//   return sumaTotal;
// };
// resultadoNum();
// console.log(resultadoNum());
// EJERCICIO 8
// Hacer un programa que muestre 3 números ordenados descendentemente, utilizar un procedimiento para cada operación.
// Recursividad:

const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacci2 = () => {
  const numero1 = fibonacci(6);
  const numero2 = fibonacci(7);
  const numero3 = fibonacci(8);
  let orden1 = Math.min(numero1, numero2, numero3);
  let orden3 = Math.max(numero1, numero2, numero3);
  let orden2 = numero1 + numero2 + numero3 - orden1 - orden3;
  // console.log(orden3, orden2, orden1);
  // console.log(numero1, numero2, numero3);
};
// fibonacci2();

const sumasNumero = (n, e) => {
  if (n >= 4) return n;
  return (resul = sumasNumero(n + e) + sumasNumero(n + e));
};

const sumaN = () => {
  const suma = sumasNumero(3, 2);
  const suma2 = sumasNumero(2, 2);
  const suma3 = sumasNumero(2, 5);
  console.log(suma, "sum", suma2, suma3);

  let orden3 = Math.max(suma, suma2, suma3);
  let orden1 = Math.min(suma, suma2, suma3);
  let orden2 = suma + suma2 + suma3 - orden1 - orden3;
  // console.log(orden3, orden2, orden1);
};

// sumaN();

const binario = (num) => {
  let arr = [];
  while (num > 1) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
  }
  arr.push(num);
  return parseInt(arr.reverse().join(""));
};
// console.log(binario(10));
// console.log(binario(11));
// console.log(binario(13));

const hola = () => {
  // console.log("Hola");
};

const mundo = () => {
  hola();
  // console.log("mundo");
};

// mundo();

// const numero2 = (num) => {
//   let arr2 = [];
//   num = num.toString();
//   console.log(num, "num");
//   let arr = num.split("");
//   let reverse = arr.reverse();
//   console.log(reverse, "reverse");
//   let result = reverse.join("");
//   arr2 = arr2 + result;
//   console.log(arr2, "reverse---");

//   return arr2;
// };
// console.log(numero2(254));

function invertirNumero(num) {
  console.log(num);
  if (num < 10) {
    console.log(`entra si tine un numero`);
    return num;
  } else {
    const ultimoDigito = num % 10;
    console.log(ultimoDigito, `ultimo numero`);
    const resto = Math.floor(num / 10);
    console.log(resto, `floor son restos ejercicio 1`);
    return (
      invertirNumero(ultimoDigito).toString() + invertirNumero(resto).toString()
    );
  }
}
// console.log(invertirNumero(421));
// console.log(invertirNumero(5));

const math = (n) => {
  console.log(n, "numero entrante");
  if (n < 10) {
    console.log(`retorna cuando sea un dijito`);
    return n;
  }
  const ultimo = n % 10;
  console.log(ultimo, "ultimo dijito con %");
  const resto = Math.floor(n / 10);
  console.log(num, "dividido 2 con floor");
  return math(ultimo).toString() + math(resto).toString();
};
// console.log(math(345));
// math(23);
