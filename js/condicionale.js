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

const multipleNumbers = () => {
  let number1 = prompt("Ingresar n1");
  let number2 = prompt("Ingresar n2");
  if (number1 % number2 === 0) {
    console.log(`Son múltiplos ${number1} y ${number2}`);
  } else {
    console.log(`No son múltiplos ${number1} y ${number2}`);
  }
};

// 4 EJERCICIO DE CONDICIONALES
// Pedir dos números y decir cual es el mayor

const numMayor = () => {
  let number1 = prompt("n1");
  let number2 = prompt("n2");

  if (number1 > number2) {
    console.log(`El ${number1} mayor que ${number2} `);
  } else if (number2 > number1) {
    console.log(`El ${number2} mayor que ${number1} `);
  } else {
    console.log(`No ingresaste numeros `);
  }
};
//  5 EJERCICIO DE CONDICIONES
// Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente

const calificacion = () => {
  let calificaEstudiante = prompt("Ingresar calificacion");
  if (calificaEstudiante <= 5) {
    console.log(`${calificaEstudiante} es insuficiente`);
  } else if (calificaEstudiante > 5 && calificaEstudiante <= 6) {
    console.log(`${calificaEstudiante} es suficiente`);
  } else if (calificaEstudiante > 6 && calificaEstudiante <= 8) {
    console.log(`${calificaEstudiante} es bien`);
  } else {
    console.log(`${calificaEstudiante} es excelente`);
  }
};
// 6 EJERCICIO DE CONDICIONES
//  En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos
// más baratas. Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar.

const videoclub = () => {
  let p1 = parseInt(prompt("pelicula p1"));
  let p2 = parseInt(prompt("pelicula p2"));
  let p3 = parseInt(prompt("pelicula p3"));

  suma1 = p1 + p2;
  suma2 = p1 + p3;
  suma3 = p2 + p3;
  sumaTotal = p1 + p2 + p3;

  if (p1 > p2 && p1 > p3) {
    console.log(`numero ${p2} y ${p3} uno ${suma3}`);
  } else if (p2 > p1 && p2 > p3) {
    console.log(`numero ${p1} y ${p3} uno ${suma2}`);
  } else if (p3 > p1 && p3 > p2) {
    console.log(`numero ${p1} y ${p2} uno ${suma1}`);
  } else if (p1 === p2 && p3) {
    console.log(
      `no tiene descuento ${p1} + ${p2} + ${p3} suma total $ ${sumaTotal} `
    );
  } else {
    console.log(`No ingreso los numero`);
  }
};
videoclub();
