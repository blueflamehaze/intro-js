/**
 * Ejercicio 3
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

// Option 1
console.log(Object.hasOwn(student, "name"));

// Option2
console.log(student.hasOwnProperty("name"));
