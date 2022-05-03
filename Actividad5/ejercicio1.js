/*  Ejercicio 1
  Construye un código bajo las siguientes reglas
  Itera arreglo = [1,4,6,10,22,55,46,2,5,0] utilizando un ciclo for
  Imprime en consola los valores que sean mayores a 3 
  
*/

var array = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

var greaterThanThree = [];

for (let index = 0; index < array.length; index++) {
  if (array[index] > 3) {
    greaterThanThree.push(array[index]);
  }
}

console.log(greaterThanThree);
