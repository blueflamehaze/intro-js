/* Una función engloba un procedimiento en específico 
para una tarea a realizar 
Crear función que reciba una lista de números y un número a buscar
y que retorno en que posición se encuentra el elemento a buscar 
*/

const list = [1, 2, 3, 4, 5, 6, 7];

// parametros: lista de números y un número

function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      return i;
    }
  }
}

const x = findNumber(list, 4);
console.log(x);

//Arrow function
const findNumberArrow = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      return i;
    }
  }
};

console.log(findNumberArrow(list, 3));
