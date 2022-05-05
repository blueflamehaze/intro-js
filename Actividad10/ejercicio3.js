/**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
     matriz = [7,2,5,3,5,3]
     br = [7,2,5,4,6,3,5,3]

     Los números que faltan en arr son [4,6]

*/

const matriz = [7, 2, 5, 3, 5, 3];
const br = [7, 2, 5, 4, 6, 3, 5, 3];

function getMissingNumbers(firstArray, secondArray) {
  let greaterArray;
  let shortArray;
  if (firstArray > secondArray) {
    greaterArray = firstArray;
    shortArray = secondArray;
  } else {
    greaterArray = secondArray;
    shortArray = firstArray;
  }
  const numbers = greaterArray.filter(function (number) {
    return !shortArray.includes(number);
  });
  return numbers;
}

console.log(getMissingNumbers(matriz, br));
