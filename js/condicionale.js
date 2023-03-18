// 1 PRIMER EJERCICIO DE CONDICIONALES

// Escribe un programa que pregunte al usuario si es culpable o no.
// Asumiremos que: En caso afirmativo el usuario responderá si En caso
// contrario responderá no. Si el usuario responde si se escribirá el
// documento «irás a la cárcel»
const btnPregunta = document.getElementById("btnPregunta");
const preguntaUsuario = () => {
  const programa = prompt("Eres culpable? o No ");

  if (programa === "no") {
    console.log(`dijiste ${programa}`);
  } else {
    console.log(`dijiste ${programa}, irás a la cárcel»`);
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
// 6 EJERCICIO DE CONDICIONALES
//  En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos
// más baratas. Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar.

const videoclub = () => {
  let película1 = parseInt(prompt("película p1"));
  let película2 = parseInt(prompt("película p2"));
  let película3 = parseInt(prompt("película p3"));

  suma1 = película1 + película2;
  suma2 = película1 + película3;
  suma3 = película2 + película3;
  sumaTotal = película1 + película2 + película3;

  if (película1 > película2 && película1 > película3) {
    console.log(
      `Las dos más baratas son ${película2} y ${película3} cantidad a pagar  es:$ ${suma3}`
    );
  } else if (película2 > película1 && película2 > película3) {
    console.log(
      `Las dos más baratas son ${película1} y ${película3} cantidad a pagar  es: $ ${suma2}`
    );
  } else if (película3 > película1 && película3 > película2) {
    console.log(
      `Las dos más baratas son ${película1} y ${película2} cantidad a pagar  es: $${suma1}`
    );
  } else if (película1 === película2 && película3) {
    console.log(
      `Las dos más baratas son ${película1} + ${película2} + ${película3} cantidad a pagar  es: $${sumaTotal} `
    );
  } else {
    console.log(`No ingreso los numero`);
  }
};

// videoclub()

// 7 EJERCICIO DE CONDICIONALES
// Escriba un programa que reciba cuatro calificaciones de un estudiante y devuelva el promedio y la máxima y la mínima calificación.
const calificaciones = () => {
  let calificacion1 = parseInt(prompt("Calificacion1"));
  let calificacion2 = parseInt(prompt("Calificacion2"));
  let calificacion3 = parseInt(prompt("Calificacion3"));
  let calificacion4 = parseInt(prompt("Calificacion4"));

  let sumaCalificaciones =
    calificacion1 + calificacion2 + calificacion3 + calificacion4;
  resultadoFinal = sumaCalificaciones / 4;

  if (resultadoFinal <= 5) {
    console.log(`Minima ${resultadoFinal}`);
  } else if (resultadoFinal >= 8) {
    console.log(`maxima ${resultadoFinal}`);
  } else if (resultadoFinal > 5 && resultadoFinal < 8) {
    console.log(`El promedio es ${resultadoFinal}`);
  } else {
    console.log(`No ingreso calificacion `);
  }
};
// calificaciones();

// 8 EJERCICIO DE CONDICIONALES
// Realizar un programa que pida tres números y diga cuáles son pares y cuáles impares.

const paresImpar = () => {

  for (let i = 1; i <= 3; i++) {
    let n1 = parseInt(prompt("numero1"));
    if (n1 % 2 === 0 && n1 != 0) {
      console.log(`${n1} par`);
    } else {
      console.log(`${n1} impar`);
    }
  }
};
// paresImpar();

// 9 EJERCICIO DE CONDICIONALES
// Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor,
//  y cuál es el menor. (Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)
// if()
const ingresarNumeros = () => {
  let p1 = parseInt(prompt("p1"));
  let p2 = parseInt(prompt("p2"));
  let p3 = parseInt(prompt("p3"));
  console.log(`Numeros ingresados ${p1} ${p2} ${p3}`);

  if (p1 > p2 && p1 > p3) {
    console.log(`mayor: persona.. ${p1}  `);
  } else if (p2 > p1 && p2 > p3) {
    console.log(`mayor: persona  ${p2}  `);
  } else if (p3 > p2 && p3 > p1) {
    console.log(`mayor: persona  ${p3} `);
  }

  if (p1 < p2 && p2 < p3) {
    console.log(`medio: persona  ${p2} `);
  } else if (p1 > p2 && p2 > p3) {
    console.log(`medio: persona  ${p2} `);
  } else if (p2 > p1 && p1 > p3) {
    console.log(`medio: persona  ${p1} `);
  } else if (p2 === p3 && p1 != p2) {
    console.log(`Tiene dos numero iguales ${p2} ${p2}`);
  } else if (p2 > p1 && p1 < p3) {
    console.log(`medio: persona  ${p3} `);
  } else if (p1 === p3 && p1 > p2) {
    console.log(`Tiene dos numeros iguales ${p1}  ..... ${p3} `);
  } else if (p3 > p1 && p2 < p3) {
    console.log(`Medio: ${p1} `);
  } else if (p2 < p1 && p2 < p3) {
    console.log(`Medio: ${p3} `);
  } else if (p1 > p2 && p2 < p3) {
    console.log(`Medio: ${p1}  prueba`);
  } else if (p1 > p2 && p2 < p3) {
    console.log(`medio:  ${p3} `);
  } else if (p1 === p2 && p2 != p3) {
    console.log(`Tiene dos numero iguales ${p1}  ${p2}`);
  } else if (p1 === p3 && p1 != p3) {
    console.log(`Tiene dos numero iguales   ${p1}  ${p3}`);
  } else if (p1 === p3 && p2 === p3) {
    // console.log(`Son iguales ${p1} me${p3}`);
    console.log(`Los tres numeros son iguales`);
  } else if (p2 === p3) {
    console.log(`Tiene dos numero iguales   ${p2}  ${p3} `);
  } else if (p1 === p3 && p2 > p3) {
    console.log(`Son iguales ${p1} ${p3}`);
  }

  if (p1 < p2 && p1 < p3) {
    console.log(` menor: persona ${p1} `);
  } else if (p2 < p1 && p2 < p3) {
    console.log(` menor: persona ${p2}`);
  } else if (p3 < p2 && p3 < p1) {
    console.log(` menor: persona ${p3} `);
  } else {
  }
};
// ingresarNumeros();

// 10 EJERCICIO DE CONDICIÓN
// Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse.
//  Tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio,
//  una mujer mayor se jubilara si tiene más de 54 años.

const jubilarse = () => {
  let nombre = prompt("Nombre");
  let edad = prompt("Edad");
  let sexo = prompt("El sexo");
  if (
    (sexo === "femenina" && edad > 54) ||
    (sexo === "masculino" && edad >= 60)
  ) {
    console.log(`Hola ${nombre} ya te puedes jubilar`);
  } else {
    console.log(`Lo siento ${nombre}no te puedes jubilar`);
  }
};

// jubilarse();
