/** 
 * Ejercicio 4
 * Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
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

function deleteRollno(studentArray) {
  console.log(studentArray);
  delete student.rollno;
  console.log(studentArray);
}

const newStudentArray = deleteRollno(student);
console.log(newStudentArray);
