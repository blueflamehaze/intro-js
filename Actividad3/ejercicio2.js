/*  Ejercicio 2
  Crear un programa que determine si un número introducido en un prompt es par o no, 
  la respuesta será mostrada en un alert
 */

const number = prompt("Por favor ingresa un número: ");

if (number % 2 == 0) {
  alert("Es un número par");
} else {
  alert("Es un número impar");
}
