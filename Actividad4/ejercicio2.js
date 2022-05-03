//   Ejercico 2
//  Crear el mismo problema 1, ahora usando Do While

var number = Number(prompt("Por favor ingresar un número: "));

var list = [];
var index = 0;

do {
  index++;
  if (index == 1 || index % 5 == 0) {
    list.push(index);
  }
} while (index < number);

console.log(list);
