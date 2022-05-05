/* // Ejercico 1

//Empieza la función
function test() {
  //
  console.log(a); // Aquí no está definida la variables- undefined
  console.log(foo());  // Aquí se llama la función foo() que regresa el 2

  // Declarar variable y asignar el valor 1
  var a = 1;

  // Empieza función dentro de otra función
  function foo() {
    // Regresa el valor 2 de test
    return 2;
  }
}

// Llamar a la función test()
test();
 */
/* 
// Ejercicio 2
// Declarar la variable a y asignarle el valor 1
var a = 1;

function someFunction(number) {
  // La función someFunction recibe el número 9 como argumento

  function otherFunction(input) {
    // Esta function tiene un paramento que no se usa
    return a; // regresa a que es igual a 1 hasta ahhora
  }

  a = 5; //Asigna a igual a 6

  return otherFunction; // regresa a igual a 5 como resultdo de some function
}

// Asignar el resultado de la función someFunction con el argumento 9
var firstResult = someFunction(9); // Resultado a = 5
var result = firstResult(2); // Esto no se puede llamar de esa forma - Undefined
console.log(firstResult);
console.log(result); */

/* // Ejercicio 3
// Declarar varible global a y asignarle el valor 1
var a = 1;

function foo() {
  // Declara variable a y asigna el valor 2, lo tomo como valor local
  var a = 2;

  // Ejecuta la función var que solo hace un console log de a, lo cual sería 2
  function bar() {
    // console.log de a, el resultado sería 2
    console.log(a);
  }

  // Regresaría el valor de valor de 2. Duda: ¿Es correcto llamar a una función sin los parentesis?
  return bar;
}

// declarar la varible baz y asignarle como valor el resultado de llamar a la función foo(), tomaría el retorno de la función completa
var baz = foo(); // Valor 2

// No se puede llamar así, porque baz es una varible no un función, por lo tanto la función no está definida
baz(); // Sería undefined
 */

/* // Ejercicio 4
// Declarar variable global a igual a 1
var a = 1;

function b() {
  // Reasignar variable global a = 20
  a = 10;
  // No se especicifa que se va a retornar, solo sale de bloque
  return;

  //Esta función es una función vacía pero ya no se ejecuta porque antes hay un return
  function a() {}
}

// Al llamar a la función no encuentra algo que haya regresado.
b(); // Undefined
 */
