/* Ejercicio 5
  Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
  Considerar el caso en que 2 números sean iguales. 
*/

// Mi propuesta

const number1 = Number(prompt("Por favor ingresa un número: "));
const number2 = Number(prompt("Por favor introduce otro número: "));
const number3 = Number(prompt("Por favor ingresa un tercer número: "));

if (number1 > number2 && number1 > number3) {
  console.log(`El número ${number1} es el mayor`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`El número ${number2} es el mayor`);
} else if (number3 > number1 && number3 > number2) {
  console.log(`El número ${number3} es el mayor`);
} else if (number1 == number2) {
  if (number1 > number3) {
    console.log(`El número ${number1} es el mayor`);
  } else {
    console.log(`El número ${number3} es el mayor`);
  }
} else if (number2 == number3) {
  if (number3 > number1) {
    console.log(`El número ${number3} es el mayor`);
  } else {
    console.log(`El número ${number1} es el mayor`);
  }
} else if (number3 == number1) {
  if (number1 > number2) {
    console.log(`El número ${number1} es el mayor`);
  } else {
    console.log(`EL número ${number2} es el mayor`);
  }
}
