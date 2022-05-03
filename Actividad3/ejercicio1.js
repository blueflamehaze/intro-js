/*  Ejercicio 1
  Solicitar al usuario un número, y determinar si es divisible entre dos o no.
  Mostrando al usuario un mensaje de "X número es divisivle entre 2" o "X número
  no es divisible entre dos"
*/


// NOTE: El operador resto (%) devuelve el resto de la división entre dos operandos. 

const number = prompt("Por favor ingresa un número: ");
if (number % 2 == 0) {
  console.log("El número " + number + " es divisible entre 2");
} else {
  console.log("El número " + number + " NO divisible entre 2");
}
