// Ejercicios de lógica de programación

// primer ejercicio

const btn1 = document.getElementById("btn1");
function pedirNumero() {
  const element1 = document.getElementById("element1");
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
  element1.innerHTML = `la suma ${addition} la resta ${rest} la multiplicacion ${multiplication} la division ${división} los numero ingresados    ${numberOne} ,${numberTwo}`;
}

btn1.addEventListener("click", pedirNumero);

//  2 EJERCICIO DE LOGICA
// const celsius = 32;
// function convertirFahrenheitACelsius(celsius) {
//   let resultado = (celsius * 9) / 5.0 + 32;
//   return resultado;
// }
// function convertirCelsiusAFahrenheit(fahrenheit) {
//   let resultado = fahrenheit + (32 / 5.0) * 9;
//   return resultado;
// }

// let resultado = convertirCelsiusAFahrenheit(celsius);

// console.log(`resultado de ${celsius} 0C es = ${resultado} 0F`);

btn2.addEventListener("click", () => {
  const element2 = document.getElementById("element2");
  console.log("que es");
  const celsius = parseInt(prompt("Ingresé celsius"));
  function convertirFahrenheitACelsius(celsius) {
    let resultado = (celsius * 9) / 5.0 + 32;
    return resultado;
  }
  function convertirCelsiusAFahrenheit(fahrenheit) {
    let resultado = fahrenheit + (32 / 5.0) * 9;
    return resultado;
  }

  let resultado = convertirCelsiusAFahrenheit(celsius);
  element2.innerHTML = `resultado de ${celsius} 0C es = ${resultado} 0F`;
});
// 3 EJERCICIO DE LOGICA

// Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos.
const btn3 = document.getElementById("btn3");
function calcularHipotenusa() {
  const element3 = document.getElementById("element3");
  let cateto1 = prompt("Ingresa cateto 1");
  let cateto2 = prompt("Ingresa catetos 2");
  let a = Math.pow(cateto1, 2);
  let b = Math.pow(cateto2, 2);
  suma = a + b;

  resultado = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

  element3.innerHTML = `Resultado: de numeros ingresados ${cateto1} y ${cateto2}, resultado elevados  es ${a} y ${b},  la hiputenusa de ${suma} es ${resultado}`;
}

btn3.addEventListener("click", calcularHipotenusa);

//  EJERCICIO 4 DE LOGICA
// Hacer un Programa que calcule longitudes de Circunferencia.

const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
  const element4 = document.getElementById("element4");

  function circunferencia() {
    const radio = parseInt(prompt("ingresa rado"));
    let circulo = 2 * Math.PI * radio;
    return circulo;
  }
  function longitud() {
    const radio = parseInt(prompt("ingresa rado"));
    let area = Math.PI * Math.pow(radio, 2);
    return area;
  }
  let frecuencia = circunferencia();
  let longit = longitud();
  element4.innerHTML = ` Circuferencia ${frecuencia}  Longitud ${longit} `;
});
// 5 EJERCICIO DE LOGICA
//  Hacer un Programa que calcule áreas de trapecios.
const btn = document.getElementById("btnTrapecio");

btn5.addEventListener("click", () => {
  const element5 = document.getElementById("element5");
  let numeroMax = prompt("Ingresa numero mas grade");
  let numeroMin = prompt("Ingresa numero mas pequeno");
  let altura = prompt("Ingresa altura");

  let area = (parseInt(numeroMax) + parseInt(numeroMin) / 2) * parseInt(altura);
  element5.innerHTML = `El trapecio es: ${area}`;
});

// 6 EJERCICIO de logica

// Calcule la media aritmética de 3 números cualesquiera.
const btn6 = document.getElementById("btn6");
function calcularMedia() {
  const element6 = document.getElementById("element6");
  const num1 = parseInt(prompt("num1"));
  const num2 = parseInt(prompt("num2"));
  const num3 = parseInt(prompt("num3"));
  sumaArismetic = num1 + num2 + num3;
  resultadoDivicion = sumaArismetic / 3;
  element6.innerHTML = `La media ${resultadoDivicion}`;
}
btn6.addEventListener("click", calcularMedia);

// 7 EJERCICIO DE LOGICA
//  Una tienda ofrece un descuento del 15% sobre el total de la compra y un
// cliente desea saber cuánto deberá pagar finalmente por su compra.
const btn7 = document.getElementById("btn7");

// function descuento() {

//   // console.log(compraFinal);
// }
// descuento();
btn7.addEventListener("click", () => {
  const element7 = document.getElementById("element7");

  const compraSinDescuento = parseInt(prompt("Compra sin descuento"));
  const descuento = parseInt(prompt("descuento de 15%"));

  const compraFinal =
    compraSinDescuento - (descuento * compraSinDescuento) / 100;
  element7.innerHTML = `Pago final con descuento ${compraFinal}`;
});
// 8 EJERCICIO DE LOGICA
// Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimis.
const btn8 = document.getElementById("btn8");

btn8.addEventListener("click", () => {
  const element8 = document.getElementById("element8");
  let horasTrabajadas = 8;
  let valorHoras = 20;
  let diasMes = 20;
  valorDia = horasTrabajadas * valorHoras;
  salariMes = valorDia * diasMes;
  element8.innerHTML = `el valor dia ${valorDia} salario mes ${salariMes}`;
});
// 9 EJERCICIO DE LOGICA

// Calcular el nuevo salario de un obrero, si obtuvo un incremento del 25%
// sobre su salario anterior.
const btn9 = document.getElementById("btn9");

btn9.addEventListener("click", () => {
  const element9 = document.getElementById("element9");
  let salario = parseInt(prompt("Salario anterior"));
  incremento = salario * 0.25;
  nuevoSalario = salario + incremento;

  element9.innerHTML = `El nuevo salario es:${nuevoSalario}`;
});
// 10 EJERCICIO DE LOGICA
// Comprobar a través de un programa si un alumno aprobó o no un examen (Aprueba si su nota es mayor a 10.5).
const btn10 = document.getElementById("btn10");

btn10.addEventListener("click", () => {
  const element10 = document.getElementById("element10");
  let noteFinish = prompt("Ingresar nota");
  if (noteFinish > 10.5) {
    console.log("Aprobó");
    element10.innerHTML = `aprobó con la nota ${noteFinish}`;
  } else {
    element10.innerHTML = `reprobó con la nota ${noteFinish}`;
  }
});
// btnNota.addEventListener("click", knowNote);
// 11 EJERCICIO DE LOGICA
// Comprobar si un número digitado por el usuario es positivo o negativo.
const btn11 = document.getElementById("btn11");

function knowNumber() {
  const element11 = document.getElementById("element11");
  const numero = prompt("ingresar numero");
  if (numero >= 0) {
    element11.innerHTML = `El numero ${numero}, es positivo`;
  } else {
    element11.innerHTML = `El numero ${numero}, es negativo`;
  }
}

btn11.addEventListener("click", knowNumber);
// 12 EJERCICIO DE LOGICA
// Visualizar la tarifa de la luz según el gasto de corriente
//  eléctrica. Para un gasto  menor de 1.000Kwxh la tarifa es 1.2,
//  entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.

// DATOS

const btn12 = document.getElementById("btn12");
function knowTafifa() {
  const element12 = document.getElementById("element12");
  let tarifa1 = 1.2;
  let tarifa2 = 1.0;
  let tarifa3 = 0.9;
  const gasto = prompt("Ingresar gasto eletrico");
  if (gasto < 1000) {
    console.log(tarifa1);
    element12.innerHTML = ` es:${tarifa1}`;
  } else if (gasto > 1000 && gasto < 1800) {
    console.log(tarifa2);
    element12.innerHTML = ` es:${tarifa2}`;
  } else {
    console.log(tarifa3);
    element12.innerHTML = ` es:${tarifa3}`;
  }
}

btn12.addEventListener("click", knowTafifa);
// 13 EJERCICIO DE LOGICA
// Determinar si un número es par, impar.

const btn13 = document.getElementById("btn13");
function knowIfPar() {
  let numeros = prompt("Ingresar numero");
  const element13 = document.getElementById("element13");
  if (numeros % 2 === 0) {
    element13.innerHTML = `El ${numeros} es par`;
  } else {
    element13.innerHTML = `El ${numeros} es impar`;
  }
}

btn13.addEventListener("click", knowIfPar);
// 14 EJERCICIO DE LOGICA
// Calcular el mayor de dos números leídos del teclado y visualizarlo en pantalla
const btn14 = document.getElementById("btn14");
function calcularDosNumeros() {
  const element14 = document.getElementById("element14");
  const numero1 = prompt("Ingresar numero 1");
  const numero2 = prompt("Ingresar numero 2");
  if (numero1 > numero2) {
    element14.innerHTML = `numero ${numero1} es mayor`;
  } else {
    console.log(`El numero es ${numero2} Mayor`);
    element14.innerHTML = `El numero es ${numero2} Mayor`;
  }
}
btn14.addEventListener("click", calcularDosNumeros);

// 15 EJERCICIO DE  LOGICA
// Ingrese un número y calcule e imprima su raíz cuadrada.
// Si el número es negativo  imprima el número y un mensaje
// que diga “tiene raíz imaginaria”.
const btn15 = document.getElementById("btn15");
function imprimaRaizCuadrada() {
  const element15 = document.getElementById("element15");
  const numeroIngresado = prompt("ingresar para ver raíz");
  let numeroNegetive = 0;

  if (numeroIngresado > numeroNegetive) {
    let siRaiz = Math.sqrt(numeroIngresado);
    console.log();
    element15.innerHTML = `la raíz es: ${siRaiz}`;
  } else {
    element15.innerHTML = `El numero ${numeroIngresado} tine raíz imaginaria`;
  }
}

btn15.addEventListener("click", imprimaRaizCuadrada);
// 16 EJERCICIO DE LOGICA
// Ingresar por teclado el nombre y el signo de cualquier
// persona e imprima, el nombre sólo si la persona es signo
// Aries, caso contrario imprima no es signo Aries.
const btn16 = document.getElementById("btn16");

function imprimaSigno() {
  const element16 = document.getElementById("element16");
  const nombre = prompt("Ingresa nombre");
  const signo = prompt("Ingresa Signo");
  let miSigno = "aries";

  if (signo === miSigno) {
    element16.innerHTML = `${nombre} tu signo es ${signo}`;
  } else {
    element16.innerHTML = `No es signo Aries`;
  }
}

btn16.addEventListener("click", imprimaSigno);

// EJERCICIO 17 DE LOGICA

// Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e
// imprima, solo si la persona es de sexo masculino y mayor de edad, el
// nombre de la persona.
const btn17 = document.getElementById("btn17");
function nombreEdad() {
  const element17 = document.getElementById("element17");
  let nombre = prompt(" Ingreso nombre");
  let edadIngresada = prompt("ingresar edad");
  let sexoIngresado = prompt("ingresar el sexo");

  let edadMayor = 18;

  let sexo2 = "Masculino";
  if (edadIngresada >= edadMayor && sexoIngresado === sexo2) {
    element17.innerHTML = `Hola ${nombre} tu eded es ${edadIngresada}  y eres ${sexoIngresado}`;
  } else {
    element17.innerHTML = `Hola ${nombre} no calificas`;
  }
}

btn17.addEventListener("click", nombreEdad);
// EJERCICIO 18  DE LOGICA

// Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste
// en lo siguiente. Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha
// del 8% y las Suzuki del 10%, las otras marcas 2%

const btn18 = document.getElementById("btn18");
function motocicletas() {
  const element18 = document.getElementById("element18");
  let precioBruto = parseInt(prompt("ingresar precio"));

  let descuentoHonda = 5;
  const precioDescuento = precioBruto - (descuentoHonda * precioBruto) / 100;
  console.log(precioDescuento);

  let descuentoYamaha = 8;

  const precioDescuentoYama =
    precioBruto - (descuentoYamaha * precioBruto) / 100;

  let descuentoSuzuki = 10;
  const precioDescuentoSuzuki =
    precioBruto - (descuentoSuzuki * precioBruto) / 100;

  let descuentoOtros = 2;

  const precioDescuentoOtros =
    precioBruto - (descuentoOtros * precioBruto) / 100;
  let marca = prompt("ingresar marca");
  switch (marca) {
    case "honda":
      element18.innerHTML = `El precio de la Honda con descuento ${precioDescuento}`;
      break;
    case "yamaha":
      element18.innerHTML = ` El precio de la Yamaha con descuento ${precioDescuentoYama}`;

      break;
    case "suzuki":
      element18.innerHTML = `El precio de la Suzuki con descuento ${precioDescuentoSuzuki}`;

      break;
    case "otras":
      element18.innerHTML = `Otras marcas ${precioDescuentoOtros}`;

      break;
    default:
      element18.innerHTML = `Los datos no son valido ${precioDescuentoOtros}`;
      break;
  }
}

btn18.addEventListener("click", motocicletas);
