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
  console.log(resultadoMedia, "media");
  elementArr2.innerHTML = `<p>La  media de la array:     ${resultadoMedia}</p>`;
}

arrBoton2.addEventListener("click", sacarMediaArray);
