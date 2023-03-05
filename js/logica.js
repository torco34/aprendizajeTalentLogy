// Ejercicios de lógica de programación

// primer ejercicio
const elementOne = document.getElementById("elementOne");
const btnOne = document.getElementById("btnOne");
function pedirNumero() {
  const numberOne = parseInt(prompt("Ingresar numero uno"));
  const numberTwo = parseInt(prompt("Ingresar numero dos"));
  addition = numberOne + numberTwo;
  console.log(addition);
  rest = numberOne - numberTwo;
  console.log(rest);
  multiplication = numberOne * numberTwo;
  console.log(multiplication);
  división = numberOne / numberTwo;
  console.log(división);
  elementOne.innerHTML = `la suma ${addition} la resta ${rest} la multiplicacion ${multiplication} la division ${división} los numero ingresados    ${numberOne} ,${numberTwo}`;
}

btnOne.addEventListener("click", pedirNumero);
