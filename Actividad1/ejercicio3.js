/* Ejercicio 3
  Escribe un programa que calcule el área de un círculo con un radio= 5.3. Imprime
  el área en pantalla. (Fórmula: pi*r^2)
*/

const radious = 5.3;
const pi = Math.PI;
const area = pi * radious ** 2;
console.log(area);
alert("El área del círculo es: " + area);
