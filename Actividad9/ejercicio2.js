// Ejercicio 2
// Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function enumerateProperties(studentArray) {
  for (const [key, value] of Object.entries(studentArray)) {
    console.log(`${key}: ${value}`);
  }
}

const studentProperties = enumerateProperties(student);
console.log(studentProperties);
