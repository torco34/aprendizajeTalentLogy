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

console.log(`Resultado ${arismetic()}`);
