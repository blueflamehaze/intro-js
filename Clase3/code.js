// Escribir datos y que se agreguen a una variable. Hasta que el usuario no escriba fin
// no podremos salir del ciclo.

/* let list = prompt("Escribe un artículo: ");
let articulos = "";

while (list != "fin") {
  articulos += list + "\n";
  list = prompt("Escribe un artículo: ");
}

console.log(articulos); */
/* var arreglo = [];
var userInput;

while (!(userInput == "")) {
  userInput = prompt("INgresa cualqueir caracter");
  arreglo.push(userInput);
}

console.log("Introdujiste estos valores: " + arreglo); */

var contador = 0;
for (let index = 1; index <= 10; index++) {
  if (index % 2 == 0) {
    contador = contador + 1;
    console.log(`${index} es multiplo de 2`);
  }
}

console.log(`De 0 a l0 existen ${contador} multiplos de 2`);
