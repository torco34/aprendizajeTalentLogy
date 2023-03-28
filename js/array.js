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

  console.log(
    `El promedio de notas aprobadas ${promedioNotasAprobada} cantidad notas aprobadas  ${totalNotasAprobadas}`
  );

  const notasDesaprobadas = nota.filter((nota) => nota < 10);
  const sumaNotasDesaprobadas = notasDesaprobadas.reduce(
    (acumulador, currentValue) => acumulador + currentValue
  );
  const promedioDesaprobada = sumaNotasDesaprobadas / notasDesaprobadas.length;
  console.log(
    `el promedio de la nota desaprobadas ${promedioDesaprobada} cantidad desaprobadas ${notasDesaprobadas.length}`
  );
}
promedio([0, 1, 2, 3, 14, 15, 16, 17, 18, 19, 20]);
