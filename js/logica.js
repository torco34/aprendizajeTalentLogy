// Ejercicios de lógica de programación

// primer ejercicio
const elementOne = document.getElementById("elementOne");
const btnOne = document.getElementById("btnOne");
function pedirNumero() {
  const numberOne = parseInt(prompt("Ingresar numero uno"));
  const numberTwo = parseInt(prompt("Ingresar numero dos"));
  addition = numberOne + numberTwo;
  console.log(addition);
  rest = numberOne - numberTwo;
  console.log(rest);
  multiplication = numberOne * numberTwo;
  console.log(multiplication);
  división = numberOne / numberTwo;
  console.log(división);
  elementOne.innerHTML = `la suma ${addition} la resta ${rest} la multiplicacion ${multiplication} la division ${división} los numero ingresados    ${numberOne} ,${numberTwo}`;
}

btnOne.addEventListener("click", pedirNumero);

//  SEGUNDO EJERCICIO DE LOGICA
const celsius = 32;
function convertirFahrenheitACelsius(celsius) {
  let resultado = (celsius * 9) / 5.0 + 32;
  return resultado;
}
function convertirCelsiusAFahrenheit(fahrenheit) {
  let resultado = fahrenheit + (32 / 5.0) * 9;
  return resultado;
}

let resultado = convertirCelsiusAFahrenheit(celsius);

console.log(`resultado de ${celsius} 0C es = ${resultado} 0F`);

// TERCER EJERCICIO DE LOGICA

// Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos.
const catetos = document.getElementById("catetos");
function calcularHipotenusa() {
  let cateto1 = prompt("Ingresa cateto 1");
  let cateto2 = prompt("Ingresa catetos 2");
  let a = Math.pow(cateto1, 2);
  let b = Math.pow(cateto2, 2);
  suma = a + b;

  resultado = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
  console.log(
    `Resultado: de numeros ingresados ${cateto1} y ${cateto2}, resultado elevados  es ${a} y ${b},  la hiputenusa de ${suma} es ${resultado}`
  );
}

catetos.addEventListener("click", calcularHipotenusa);

// CUARTO EJERCICIO DE LOGICA
// Hacer un Programa que calcule longitudes de Circunferencia.

function circunferencia(radio) {
  let circulo = 2 * Math.PI * radio;
  console.log(`Circuferencia ${circulo}`);
}
function longitud(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  console.log(`longitud ${area}`);
}
longitud(4);
circunferencia(4);
// QUINTO EJERCICIO DE LOGICA
//  Hacer un Programa que calcule áreas de trapecios.
const btnTrapecio = document.getElementById("btnTrapecio");
function calcularAreaTrapecio() {
  let numeroMax = prompt("Ingresa numero mas grade");
  let numeroMin = prompt("Ingresa numero mas pequeno");
  let altura = prompt("Ingresa altura");

  let area = (parseInt(numeroMax) + parseInt(numeroMin) / 2) * parseInt(altura);
  console.log(`El area del trapecio es ${area}`);
}
btnTrapecio.addEventListener("click", calcularAreaTrapecio);

// SEXTO EJERCICIO de logica

// Calcule la media aritmética de 3 números cualesquiera.
const btnArismet = document.getElementById("btnArismet");
function calcularMedia() {
  const num1 = parseInt(prompt("num1"));
  const num2 = parseInt(prompt("num2"));
  const num3 = parseInt(prompt("num3"));
  sumaArismetic = num1 + num2 + num3;
  resultadoDivicion = sumaArismetic / 3;
  console.log(resultadoDivicion);
}
btnArismet.addEventListener("click", calcularMedia);

// SÉPTIMO EJERCICIO DE LOGICA
//  Una tienda ofrece un descuento del 15% sobre el total de la compra y un
// cliente desea saber cuánto deberá pagar finalmente por su compra.
function descuento() {
  let compraSinDescuento = 300;
  let descuento = 15;
  const compraFinal =
    compraSinDescuento - (descuento * compraSinDescuento) / 100;
  // console.log(compraFinal);
}
descuento();

// OCTAVO EJERCICIO DE LOGICA
// Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimis.

function calcularSalario() {
  let horasTrabajadas = 8;
  let valorHoras = 20;
  let diasMes = 20;
  valorDia = horasTrabajadas * valorHoras;
  salariMes = valorDia * diasMes;
  // console.log(valorDia);
  // console.log(salariMes);
}
calcularSalario();

// NOVENO EJERCICIO DE LOGICA

// Calcular el nuevo salario de un obrero, si obtuvo un incremento del 25% sobre su salario anterior.

function calcularNuevoSalaro(salario, incremento, nuevoSalario) {
  incremento = salario * 0.25;
  nuevoSalario = salario + incremento;
  // console.log(incremento);
  // console.log(nuevoSalario);
}
calcularNuevoSalaro(200);

// 10 EJERCICIO DE LOGICA
// Comprobar a través de un programa si un alumno aprobó o no un examen (Aprueba si su nota es mayor a 10.5).
const btnNota = document.getElementById("btnNota");

function knowNote() {
  let noteFinish = prompt("Ingresar nota");
  if (noteFinish > 10.5) {
    console.log("Aprobó");
  } else {
    console.log("Reaprobo");
  }
}

btnNota.addEventListener("click", knowNote);
// 11 EJERCICIO DE LOGICA
// Comprobar si un número digitado por el usuario es positivo o negativo.
const btnPositive = document.getElementById("btnPositive");

function knowNumber() {
  const numero = prompt("ingresar numero");
  if (numero > 0) {
    console.log(` El numero ${numero}, es positivo`);
  } else {
    console.log(`El numero ${numero}, es negativo`);
  }
}

btnPositive.addEventListener("click", knowNumber);
// 12 EJERCICIO DE LOGICA
// Visualizar la tarifa de la luz según el gasto de corriente
//  eléctrica. Para un gasto  menor de 1.000Kwxh la tarifa es 1.2,
//  entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.

// DATOS

const btnTarifa = document.getElementById("btnTarifa");
function knowTafifa() {
  let tarifa1 = 1.2;
  let tarifa2 = 1.0;
  let tarifa3 = 0.9;
  const gasto = prompt("Ingresar gasto eletrico");
  if (gasto < 1000) {
    console.log(tarifa1);
  } else if (gasto > 1000 && gasto < 1800) {
    console.log(tarifa2);
  } else {
    console.log(tarifa3);
  }
}

btnTarifa.addEventListener("click", knowTafifa);
// 13 EJERCICIO DE LOGICA
// Determinar si un número es par, impar.

const btnPar = document.getElementById("btnPar");
function knowIfPar() {
  let numeros = prompt("Ingresar numero");

  if (numeros % 2 === 0) {
    console.log(`El ${numeros} es par`);
  } else {
    console.log(`El ${numeros} es impar`);
  }
}

btnPar.addEventListener("click", knowIfPar);
