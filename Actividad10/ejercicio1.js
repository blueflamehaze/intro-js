/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12];

function getNumbers(array) {
  const sortedArray = array.sort(function (a, b) {
    return a - b;
  });
  const secondNumber = sortedArray.at(1);
  const lastSecondNumber = sortedArray.at(array.length - 2);
  return { secondNumber, lastSecondNumber };
}

console.log(getNumbers(arr));
