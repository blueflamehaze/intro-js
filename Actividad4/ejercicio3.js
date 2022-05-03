/* Ejercicio 3
  Usando for, crea un programa que imprima en consola los números
  impares del 1 al 50 
  
*/

var pairs = [];

for (let index = 1; index <= 50; index++) {
  if (index % 2 != 0) {
    pairs.push(index);
  }
}

console.log(pairs);
