/* Ejercicio 4
  Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
  No considerar el caso en que ambos número son iguales. 
*/

const number1 = Number(prompt("Por favor ingresa un número: "));
const number2 = Number(prompt("Por favor ingresa otro número"));

if (number1 > number2) {
  console.log("El número " + number2 + " es menor");
} else if (number2 > number1) {
  console.log("El número " + number1 + " es menor");
}
