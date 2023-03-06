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
function CalcularHipotenusa() {
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

catetos.addEventListener("click", CalcularHipotenusa);

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
