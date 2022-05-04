/**
 * Ejercicio 6
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */

var student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};

function addPets(studentArray) {
  Object.defineProperty(studentArray, "pet", {
    value: ["cat", "dog"],
    writable: true,
    enumerable: true,
  });
  return studentArray;
}

const studentWithPets = addPets(student);
console.log(studentWithPets);
