// EJERCICIO 1 STRINGS
// Escribir un programa que pregunte el nombre completo del usuario en la
// consola y después muestre por pantalla el nombre completo del usuario
// tres veces, una con todas las letras minúsculas, otra con todas las
// letras mayúsculas y otra solo con la primera letra del nombre y de los
// apellidos en mayúscula. El usuario puede introducir su nombre
// combinando mayúsculas y minúsculas como quiera.

const mostrarLetras = () => {
  const nombre = prompt(`Ingresa nombre letra mayúscula`);
  let nombreMinúsculo = nombre.toLowerCase();
  console.log(nombreMinúsculo);

  let nombreM = nombre.toUpperCase();
  console.log(nombreM);
  const palabras = nombre.split(" ");
  const nombreTitulo = palabras
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(" ");
  console.log(nombreTitulo);
};
// mostrarLetras();

//EJERCICIO 2 STRING
// Escribir un programa que pregunte el nombre
// del usuario en la consola y después de que el
// usuario lo introduzca muestre por pantalla <NOMBRE>
// tiene <n> letras, donde <NOMBRE> es el nombre de usuario
//en mayúsculas y <n> es el número de letras que tienen el nombre.

function logiNombre() {
  let nombre = prompt("ingrese su nombre");
  let log = nombre.length;

  let nombreMayúscula = nombre.toUpperCase();
  console.log(nombreMayúscula);
  console.log(`el nombre es ${nombreMayúscula} y tiene ${log} letras`);
}
// logiNombre();

//EJERCICIO 3
//Los teléfonos de una empresa tienen el siguiente formato
// prefijo-número-extension donde el prefijo es el código del
// país +34, y la extensión tiene dos dígitos (por ejemplo
//+34-913724710-56). Escribir un programa que pregunte por un
//número de teléfono con este formato y muestre por pantalla el
///número de teléfono sin el prefijo y la extensión.

function sinExtensionPrefijo() {
  let teléfono = "+34-913724710-56";
  let prefijo = "+34-";
  let extension = "-56";
  let teléfonoPedido = teléfono.replace(prefijo, "").replace(extension, "");
  //replace quita si esta vació y agrega lo que escribes
  console.log(teléfonoPedido);
}
// sinExtensionPrefijo();

// ejercicio 4 string
// Escribir un programa que pida al usuario que introduzca una frase en la consola
//  y muestre por pantalla la frase invertida.

function invertiFrase() {
  let frase = prompt(`Ingresar frase`);
  let convertirArr = frase.split("");
  let invertirFrase = convertirArr.reverse();
  let unirCaractere = invertirFrase.join("");
  console.log(unirCaractere);
}
// invertiFrase();

// ejercicio 5 strings
//Escribir un programa que pida al usuario que introduzca
//  una frase en la consola y una vocal, y después muestre
//  por pantalla la misma frase pero con la vocal introducida en mayúscula.

// frase = frase.replace(new RegExp(vocal, "g"), vocal);

function vocalMayuscula() {
  let frase = prompt("Introduzca la frase");
  let vocal = prompt("Introduzca la vocal");

  vocal = vocal.toUpperCase();
  frase = frase.replace(new RegExp(vocal, "ig"), vocal);
  console.log(frase);
}
// vocalMayuscula();

//EJERCICIO 6 STRINGS
// Escribir un programa que pregunte el correo
// electrónico del usuario en la consola y
// muestre por pantalla otro correo electrónico
// con el mismo nombre (la parte delantera de la arroba @)
// pero con dominio ceu.es.

function emailDiferente() {
  const email = prompt(`Introduzca correo`);
  // Me divide el cooreo hasta donde esta @
  const separaCadenaText = email.split("@")[0];
  let agregar = "@ceu.es";
  const resultadoFinal = separaCadenaText + agregar;
  console.log(resultadoFinal, "email final");
}

// emailDiferente();
//sin el indice de array podemos separa en array
let estrin = "este,es,un,texto";
let separar0 = estrin.split(",");

// console.log(separar0, separar1 );

// EJERCICIO 7 STRINGS
//Escribir un programa que pregunte por consola
// por los productos de una cesta de la compra,
// separados por comas, y muestre por pantalla
// cada uno de los productos en una línea distinta.

function productosLineaDistinta() {
  const productos = prompt("Ingresé productos separados con coma");
  const separaProducto = productos.split(",");

  for (let i = 0; i < separaProducto.length; i++) {
    console.log(separaProducto[i]);
  }
}
// productosLineaDistinta()