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

arrBoton.addEventListener("click", array);
// Ejercicio 2 array
// Crea un array o arreglo unidimensional con un tamaño de 10,
//  inserta los valores numéricos que desees de la manera que quieras
//  y muestra por pantalla la media de valores del array.

function mediaArray() {
    const elementArr = document.getElementById("elementArr");
    const arrBoton = document.getElementById("arrBoton");
  let array = [];
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    array[i] = parseInt(prompt("Ingresar array"));
    contador = contador + array[i];
    console.log(contador, array);
    resultado = contador / 10;
  }
  console.log(contador, resultado);
}
mediaArray();
