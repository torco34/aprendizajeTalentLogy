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
