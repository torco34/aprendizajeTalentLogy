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
// console.log(sumaSeries(5));

// EJERCICIO 6
// Escribir un programa que calcule los primeros ‘n’
// números de Fibonacci. Los números de Fibonacci comienzan con 0 y 1, y
// cada término siguiente es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …

const fibonacci = (numeros) => {
  const array = [0, 1];
  let arr = [];
  for (let i = 2; i < numeros; i++) {
    array[i] = array[i - 1] + array[i - 2];
    arr.push(array[i]);
  }
  return array;
};
// console.log(fibonacci(10));

// EJERCICIO 7
// Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores o iguales a 3.0.
const notasFinales = () => {
  let contador = 0;
  let contador2 = 0;

  for (let i = 0; i < 5; i++) {
    let notas = prompt("Notas");

    if (notas <= 3) {
      contador = contador + notas.length;
      suma = contador;

      console.log(`Menor o igual a 3 :     ${suma} notas  `);
    } else if (notas >= 4) {
      contador2 = contador2 + notas.length;
      suma2 = contador2;
      console.log(`Mayor a 3 :      ${suma2} notas`);
    } else {
      console.log(`No ingreso numeros   `);
    }
  }
};
// notasFinales();
