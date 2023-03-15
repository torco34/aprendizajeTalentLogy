// CICLOS EJERCICIO 1
// Ejercicios Ciclos
// Un bucle while que cuente desde 50 hasta 40 (fíjate que en este caso es decreciente)

const contarNumero = () => {
  let nu = 50;
  while (nu >= 40) {
    console.log(` numeros ${nu}`);
    nu--;
  }
};
// CICLOS EJERCICIO 2

// Un bucle while que a partir de una variable “contador”
//  que toma valores de 1 a 5, muestre por pantalla el doble del valor
// de “contador”, es decir, que muestre 2, 4, 6, 8, 10.

const contadores = () => {
  let contador = 1;
  while (contador <= 5) {
    console.log(`contador ${contador}`);
    contador++;
    suma = contador + contador - 2;
    console.log(suma);
  }
};
// contadores();

// EJERCICIO 3
// calcular la suma de los primeros cien números con un ciclo.
const calcularSuma = () => {
  let contador = 1;
  let suma = 0;
  while (contador <= 100) {
    console.log(` ${contador}`);
    contador++;
    suma = suma + contador - 1;
    console.log(` ${suma}`);
  }
};
// calcularSuma();

// EJERCICIO 4
// Construir un programa que calcule y visualice por pantalla el factorial de todos los valores numéricos enteros entre 1 y 10.
const factorial = (num) => {
  // let resultado = prompt("hola");
  let resultado = num;
  let resultado2 = resultado; //4 , //4//8//24
  let arr = [];
  for (let i = 1; i < resultado; i++) {
    resultado2 = resultado2 * i;
    arr.push(resultado2);
    console.log(resultado2);
    let arr = [];
  }
  console.log(resultado2);
  return arr;
};
// console.log(factorial(5));

// Ejercicio 5
//Escribir un programa que dado un número entero positivo n, calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n
const sumaSeries = (n) => {
  let num = n;
  let contador = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    resultado = contador + 1 / i;
    arr.push(resultado);
  }

  return arr;
};
console.log(sumaSeries(5));
