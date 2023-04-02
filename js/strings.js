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
const nombre = "luis jesus arias";
const palabras = nombre.split("");
const resultado = palabras
  .map(
    (palabra) =>
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
  )
  .join(""
  );
console.log(resultado);
