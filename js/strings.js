// EJERCICIO 1 STRINGS
// Escribir un programa que pregunte el nombre completo del usuario en la
// consola y después muestre por pantalla el nombre completo del usuario
// tres veces, una con todas las letras minúsculas, otra con todas las
// letras mayúsculas y otra solo con la primera letra del nombre y de los
// apellidos en mayúscula. El usuario puede introducir su nombre
// combinando mayúsculas y minúsculas como quiera.
const boton1 = document.getElementById("boton1");
const mostrarLetras = () => {
  const element1 = document.getElementById("element1");
  const nombre = prompt(`Ingresa nombre letra mayúscula`);
  let nombreMinúsculo = nombre.toLowerCase();

  let nombreMayuscula = nombre.toUpperCase();

  const palabras = nombre.split(" ");
  const nombreTitulo = palabras
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(" ");

  element1.innerHTML = ` 
   letra minúsculo: 
  (${nombreMinúsculo}) 
  letra mayúscula: 
  (${nombreMayuscula}) 
   letra primera: 
  (${nombreTitulo})`;
};

boton1.addEventListener("click", mostrarLetras);
//EJERCICIO 2 STRING
// Escribir un programa que pregunte el nombre
// del usuario en la consola y después de que el
// usuario lo introduzca muestre por pantalla <NOMBRE>
// tiene <n> letras, donde <NOMBRE> es el nombre de usuario
//en mayúsculas y <n> es el número de letras que tienen el nombre.
const boton2 = document.getElementById("boton2");
function logiNombre() {
  const element2 = document.getElementById("element2");
  let nombre = prompt("ingrese su nombre");
  let longitud = nombre.length;

  let nombreMayúscula = nombre.toUpperCase();

  element2.innerHTML = `el nombre es ${nombreMayúscula} y tiene ${longitud} letras`;
}

boton2.addEventListener("click", logiNombre);
//EJERCICIO 3
//Los teléfonos de una empresa tienen el siguiente formato
// prefijo-número-extension donde el prefijo es el código del
// país +34, y la extensión tiene dos dígitos (por ejemplo
//+34-913724710-56). Escribir un programa que pregunte por un
//número de teléfono con este formato y muestre por pantalla el
///número de teléfono sin el prefijo y la extensión.
const boton3 = document.getElementById("boton3");
function sinExtensionPrefijo() {
  const element3 = document.getElementById("element3");
  let teléfono = "+34-913724710-56";
  let prefijo = "+34-";
  let extension = "-56";
  let teléfonoPedido = teléfono.replace(prefijo, "").replace(extension, "");
  //replace quita si esta vació y agrega lo que escribes
  console.log();
  element3.innerHTML = ` ${teléfonoPedido} `;
}

boton3.addEventListener("click", sinExtensionPrefijo);
// ejercicio 4 string
// Escribir un programa que pida al usuario que introduzca una frase en la consola
//  y muestre por pantalla la frase invertida.
const boton4 = document.getElementById("boton4");
function invertirFrase() {
  const element4 = document.getElementById("element4");
  let frase = prompt(`Ingresar frase`);
  let convertirArr = frase.split("");
  let invertirFrase = convertirArr.reverse();
  let unirCarácter = invertirFrase.join("");
  element4.innerHTML = ` ${unirCarácter} `;
}
boton4.addEventListener("click", invertirFrase);

// ejercicio 5 strings
//Escribir un programa que pida al usuario que introduzca
//  una frase en la consola y una vocal, y después muestre
//  por pantalla la misma frase pero con la vocal introducida en mayúscula.

const boton5 = document.getElementById("boton5");
function vocalMayuscula() {
  const element5 = document.getElementById("element5");
  let frase = prompt("Introduzca la frase");
  let vocal = prompt("Introduzca la vocal");

  vocal = vocal.toUpperCase();
  frase = frase.replace(new RegExp(vocal, "ig"), vocal);
  console.log(frase);
  element5.innerHTML = ` ${frase} `;
}
boton5.addEventListener("click", vocalMayuscula);
//EJERCICIO 6 STRINGS
// Escribir un programa que pregunte el correo
// electrónico del usuario en la consola y
// muestre por pantalla otro correo electrónico
// con el mismo nombre (la parte delantera de la arroba @)
// pero con dominio ceu.es.
const boton6 = document.getElementById("boton6");
function emailDiferente() {
  const element6 = document.getElementById("element6");
  const email = prompt(`Introduzca correo`);
  // Me divide el cooreo hasta donde esta @
  const separaCadenaText = email.split("@")[0];
  let agregar = "@ceu.es";
  const resultadoFinal = separaCadenaText + agregar;

  element6.innerHTML = ` ${resultadoFinal} `;
}
boton6.addEventListener("click", emailDiferente);

//sin el indice de array podemos separa en array
let estrin = "este,es,un,texto";
let separar0 = estrin.split(",");

// console.log(separar0, separar1 );

//EJERCICIO 7 STRINGS
//Escribir un programa que pregunte al usuario la fecha
//de su nacimiento en formato dd/mm/aaaa y muestra por
//pantalla, el día, el mes y el año. Adaptar el programa
//anterior para que también funcione cuando el día o el mes
//se introduzcan con un solo carácter.
const boton7 = document.getElementById("boton7");
function fecha() {
  const element7 = document.getElementById("element7");
  let fecha = prompt(
    `Por favor ingrese su fecha de nacimiento en formato dd/mm/aaaa"`
  );
  let separar = fecha.split("/");
  let dia = parseInt(separar[0]);
  let mes = parseInt(separar[1]);
  let año = parseInt(separar[2]);

  if (dia.length == 1) {
    dia = "0" + dia;
  }
  if (mes.length == 1) {
    mes = "0" + mes;
  }

  element7.innerHTML = ` Su fecha de nacimiento es: ${dia}/${mes}/${año}`;
}
boton7.addEventListener("click", fecha);

//EJERCICIO 8 STRINGS
//Escribir un programa que pregunte por consola
// por los productos de una cesta de la compra,
// separados por comas, y muestre por pantalla
// cada uno de los productos en una línea distinta.

const boton8 = document.getElementById("boton8");
function productosLineaDistinta() {
  const element8 = document.getElementById("element8");
  const productos = prompt("Ingresé productos separados con coma");
  const separaProducto = productos.split(",");
  let separado = 0;
  for (let i = 0; i < separaProducto.length; i++) {
    separado = separado + separaProducto[i];
  }
  element8.innerHTML = `${separado}`;
}
boton8.addEventListener("click", productosLineaDistinta);

//EJERCICIO 9 STRINGS
// Que lea una oración desde el teclado y determine cuántas palabras tiene la oración
const boton9 = document.getElementById("boton9");
function determinarPalabra() {
  const element9 = document.getElementById("element9");
  const oracion = prompt(`Ingresar oracion`);
  // NOTA
  //para dar espacio de tener un espacio entre las comlla
  let palabras = oracion.split(" ");
  console.log(palabras);
  const logPalabras = palabras.length;
  console.log(logPalabras);
  element9.innerHTML = `${logPalabras}`;
}
boton9.addEventListener("click", determinarPalabra);
// determinarPalabra();
//EJERCICIO 10 STRINGS
//Crear Función que determine si un string numérico
//  es capicua EJ: “12321”
const boton10 = document.getElementById("boton10");
function capicua() {
  const element10 = document.getElementById("element10");
  let num = "1234";
  let d = num.toString().split("");
  let e = d.slice().reverse();
  capicua = d.join("") === e.join("");
  element10.innerHTML = `${capicua}`;
}
boton10.addEventListener("click", capicua);
