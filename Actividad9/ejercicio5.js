/** 
 * Ejercicio 5
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
La nueva edad debe ser 35.
*/

var student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};

function changeAge(studentArray) {
  studentArray.age = 35;
  return studentArray;
}

const studentAge = changeAge(student);
console.log(studentAge);
