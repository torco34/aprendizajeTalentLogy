// Ejercicio 1 array
// Crea un array o arreglo unidimensional con un tamaño de 5, asignar los valores
// numéricos manualmente (los que tu quieras) y mostrarlos por pantalla.

function array() {
  const elementArr = document.getElementById("elementArr");
  const arrBoton = document.getElementById("arrBoton");
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = prompt("Ingresar array");
  }
  elementArr.innerHTML = `<p>  ${arr}  </p>`;
}

// Ejercicio 2 array
// Crea un array o arreglo unidimensional con un tamaño de 10,
//  inserta los valores numéricos que desees de la manera que quieras
//  y muestra por pantalla la media de valores del array.
const arrBoton2 = document.getElementById("arrBoton2");

function sacarMediaArray() {
  const elementArr2 = document.getElementById("elementArr2");
  const elementArr3 = document.getElementById("elementArr3");
  let array = [];
  let resultadoMedia = "";
  let contadores = 0;
  for (let i = 0; i < 5; i++) {
    array[i] = parseInt(prompt("Ingresar array"));

    const resultadoSuma = array.reduce(
      (contador, currentValue) => contador + currentValue,
      contadores
    );
    resultadoMedia = resultadoSuma / array.length;
    elementArr3.innerHTML = `<p>La  suma:     ${resultadoSuma}</p>`;
  }

  elementArr2.innerHTML = `<p>La  media de la array:     ${resultadoMedia}</p>`;
}

arrBoton2.addEventListener("click", sacarMediaArray);

// EJERCICIO DE ARRAY 3
// Buscar un elemento dentro de un arreglo que nosotros le pedimos
// por teclado. Indicar las posición donde se encuentra. Si hay más de
// uno, indicar igualmente la posición. (FindIndex)

// Me  ubica la longitud  según le indique > <
const arrBoton3 = document.getElementById("arrBoton3");
// let arreglo = [2, 4, 1, 5, 3];
// const isLargeNumber = (element) => element === 5;
// let arregloFinal = arreglo.findIndex(isLargeNumber);

const elementArre = () => {
  const element = document.getElementById("element");
  const arrElement = document.getElementById("array");
  let arr = ["banano", "manzana", "peras", "pinas", "uva", "fresa"];
  let array = arr.length;
  arrElement.innerHTML = `tiene ${array} elementos  <br> [  ${arr}, ]  `;

  let frutas = prompt("Buscar frutas");
  const busca = (element) => element === frutas;
  let ver = arr.findIndex(busca);
  element.innerHTML = `la posición  es: ${ver}`;
  console.log(ver);
  console.log(arr);
};

arrBoton3.addEventListener("click", elementArre);

//Ejercicio de array 4

// Suponga un array con N notas de 0 a 20, calcule el
// promedio de aprobados y el promedio de los desaprobados
// e indique la cantidad de aprobados y desaprobados.

function promedio(nota) {
  const notasAprobadas = nota.filter((nota) => nota >= 10);
  const totalNotasAprobadas = notasAprobadas.length;
  const sumaNatasAprobadas = notasAprobadas.reduce(
    (acumulador, currentValue) => acumulador + currentValue
  );
  const promedioNotasAprobada = sumaNatasAprobadas / totalNotasAprobadas;

  console
    .log
    // `El promedio de notas aprobadas ${promedioNotasAprobada} cantidad notas aprobadas  ${totalNotasAprobadas}`
    ();

  const notasDesaprobadas = nota.filter((nota) => nota < 10);
  const sumaNotasDesaprobadas = notasDesaprobadas.reduce(
    (acumulador, currentValue) => acumulador + currentValue
  );
  const promedioDesaprobada = sumaNotasDesaprobadas / notasDesaprobadas.length;
  console
    .log
    // `El promedio de la nota desaprobadas ${promedioDesaprobada} cantidad desaprobadas ${notasDesaprobadas.length}`
    ();
}
promedio([0, 1, 2, 3, 14, 15, 16, 17, 18, 19, 20]);

//EJERCICIO 5 ARRAY
// Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

function vectores(arr) {
  let mayor = Math.max(...arr);
  let menor = Math.min(...arr);
  console.log(`Mayor, ${mayor}`);
  console.log(`Menor, ${menor}`);
  const suma = arr.reduce(
    (acumulador, currentValue) => acumulador + currentValue
  );
  let media = suma / arr.length;
  console.log(`Medio es ${media} `);
  console.log(suma);
  // ///////
  let arrMax = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > arrMax) {
      arrMax = arr[i];
    }
  }
  console.log(`max ${arrMax}`);
  let arrMin = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arrMin) {
      arrMin = arr[i];
    }
  }
  console.log(`min ${arrMin}`);
}
vectores([3, 5, 1, 6, 2]);
// EJERCICO 6
// ingresa un string de números del cual debes separar todos los
//  números con una coma (,) y formar un array con sus valores.

function stringNum() {
  let string = "2,4,5,1,3";
  let separarString = string.split(",").map(function (numero) {
    return numero;
  });
  console.log(separarString);
}
// stringNum();
// EJERCICIO ARRAY 7
// Recibes un Array de números y debes retornar un Array en
// donde cada número sea multiplicado por dos (Utilizar métodos de array).

function numMultip() {
  let array = [2, 3, 5, 8];
  const multiplicar = array.map(function (num) {
    return num * 2;
  });
  console.log(multiplicar);
}
// numMultip();
// EJERCICIO ARRAY 8
// Suponga un array con N números enteros generados
// aleatoriamente y mostrados en pantalla,
// N debe ser un número impar, mostrar en pantalla
// el valor que ocupa el centro del array.

function numeroImpar() {
  const n = 7;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  console.log(arr);
  const centro = Math.floor(arr.length / 2);
  console.log(`valor del centro es; ${arr[centro]}`);
}
// numeroImpar();

// EJERCICIO ARRAY 9
// Queremos guardar los nombres y las edades de los alumnos de un curso.
// Realiza un programa que introduzca el nombre y la edad de cada alumno.
// El proceso de lectura de datos terminará cuando se introduzca como nombre un
// asterisco (*) Al finalizar se mostrará los siguientes datos:
// Todos los alumnos mayores de edad.
// Encontrar la edad mayor y obtener los alumnos que posean dicha edad.

function edadNombre() {
  let alumnos = [];
  let edadMayor = 0;
  while (true) {
    let nombre = prompt(`Introduzca el nombre o * para parar`);
    if (nombre === "*") {
      break;
    }
    const edad = parseInt(prompt(`Ingresar la edad de ${nombre}`));
    alumnos[nombre] = edad;

    if (edad > edadMayor) {
      edadMayor = edad;
    }
  }
  console.log(`Alumnos menores de edad:`);
  for (const nombre in alumnos) {
    if (alumnos[nombre] >= 18) {
      console.log(nombre);
    }
  }
  console.log(`Alumnos mayor de edad:`);
  for (const nombre in alumnos) {
    if (alumnos[nombre] === edadMayor) {
      console.log(nombre);
    }
  }
}
// edadNombre();
// EJERCICIO  10
// Diseñar el algoritmo correspondiente a un programa, que:
// Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
// Carga la tabla con valores numéricos enteros.
// Suma todos los elementos de cada fila y todos los elementos
// de cada columna visualizando los resultados en pantalla.

function longitud() {
  // creada la matriz de longitud
  let matriz = [];
  for (let i = 0; i <= 5; i++) {
    let fila = new Array(5).fill(0);
    matriz.push(fila);
  }

  // cargar la matriz con valores
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const valores = parseInt();
      prompt("Ingrese el valor para la posición [" + i + "][" + j + "]: ");
      matriz[i][j] = valores;
    }
  }
  // var suma_fila = matriz[i].reduce(function(a, b) { return a + b; }, 0);
  for (let i = 0; i < 5; i++) {
    let sumafila = matriz[i].reduce(function (contador, correntValue) {
      return contador + correntValue;
    }, 0);
    console.log(`la suma es: ${i} ${sumafila}`);
  }
  // var suma_columna = matriz.reduce(function(a, b) { return a + b[j]; }, 0
  for (let j = 0; j < 5; j++) {
    const sumaColumnas = matriz.reduce(function (contador, correntValue) {
      return contador + correntValue[j];
    }, 0);
    console.log(` suma columnas ${sumaColumnas}`);
  }
}
// const ver = longitud();
