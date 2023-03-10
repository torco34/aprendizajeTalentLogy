// 1 PRIMER EJERCICIO DE CONDICIONALES

// Escribe un programa que pregunte al usuario si es culpable o no.
// Asumiremos que: En caso afirmativo el usuario responderá si En caso
// contrario responderá no. Si el usuario responde si se escribirá el
// documento «irás a la cárcel»
const btnPregunta = document.getElementById("btnPregunta");
const preguntaUsuario = () => {
  const programa = prompt("Eres culpable? o No ");
  let comparativo = "no";
  if (programa === comparativo) {
    console.log(`digiste ${programa}`);
  } else {
    console.log(`digiste ${programa}, irás a la cárcel»`);
  }
};

btnPregunta.addEventListener("click", preguntaUsuario);

// 2 EJERCICIO DE CONDICIONALES
// Determinar la naturaleza par o impar de un número.
const saberParImpar = () => {
  let number1 = prompt("Ingresar n1");
  let number2 = prompt("Ingresar n2");
  if (number1 % 2 === 0 && number2 != 0) {
    console.log(`${number1} es  numero  par y ${number2} es numero impar`);
  } else if (number2 % 2 === 0 && number1 != 0) {
    console.log(`${number2} es  numero  par y ${number1} es numero impar`);
  } else {
    console.log(`No ingresaste los numeros `);
  }
};
// 3 EJERCICIO DE CONDICIONALES
// Pedir dos números y decir si non múltiplos o no

const multiplos = () => {
  let number1 = prompt("Ingresar n1");
  let number2 = prompt("Ingresar n2");
  if (number1 % number2 === 0) {
    console.log(`Son múltiplos ${number1} y ${number2}`);
  } else {
    console.log(`No son múltiplos ${number1} y ${number2}`);
  }
};
