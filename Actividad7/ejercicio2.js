/*  Ejercicio 2
  Mediante una función  y dado un arreglo de enteros
  var numbers = [1, 2, 3, 4, 10, 11];
  encuentra la suma de sus elementos */

// reduce method ejecuta una función reductora sobre cada elemento del array regresando como
// resultado un único valor

var numbers = [1, 2, 3, 4, 10, 11];
function sumNumbers(array) {
  let sumAllNumbers = array.reduce((a, b) => a + b, 0);
  return sumAllNumbers;
}

const storedSum = sumNumbers(numbers);
console.log(storedSum);
