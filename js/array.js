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

// let arreglo = ["Banano", "Manzana", "Naranja"];
// let arreglo = [2, 4, 1, 5, 3];

// Me  ubica la longitud  según le indique > <
const arrBoton3 = document.getElementById("arrBoton3");
// const isLargeNumber = (element) => element === 5;
// let arregloFinal = arreglo.findIndex(isLargeNumber);

// console.log(arregloFinal);
const elementArre = () => {
  let arr = ["banano", "manzana", "peras", "pina", "uva"];
  let array = arr.length;
  console.log(array);
  console.log(arr);
  let frutas = prompt("Buscar frutas");
  const busca = (element) => element === frutas;
  let ver = arr.findIndex(busca);
  console.log(ver);
  console.log(arr);
};
elementArre();

arrBoton3.addEventListener("click", elementArre);
