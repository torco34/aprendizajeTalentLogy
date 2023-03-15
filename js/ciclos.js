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
