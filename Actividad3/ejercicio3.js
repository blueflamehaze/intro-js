/* Ejercicio 3
  Solicitar al usuario undefined. Si el número es el 1000, imprimir "Ganaste un premio",
  en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando"
 */

const number = prompt("Por favor ingresa un número: ");

if (Number(number) == 1000) {
  console.log("Ganaste un premio");
} else {
  console.log("Número: " + number + " Lo sentimos, sigue participando :(");
}
