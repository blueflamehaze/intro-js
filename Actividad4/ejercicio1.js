/*    Ejercicio 1
  Usando while, crea un programa que pregunte al usuario un número. Mostrar
  los números que son múltiples de 5 desde 1 hasta el número introducido por el
  usuario.

 */

var number = Number(prompt("Por favor ingresa un número: "));

var list = [];
let index = 1;
while (index < number) {
  if (index == 1 || index % 5 == 0) {
    list.push(index);
  }
  index++;
}

console.log(list);
