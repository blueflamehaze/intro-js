/* Ejercicio 2
Declara un arrelgo vacío.
Con un ciclo while que se ejecute 5 veces, agrega los elementos al array 
*/

var emptyArray = [];
let index = 0;

while (index < 5) {
  emptyArray.push(index);
  index++;
}

console.log(emptyArray);
