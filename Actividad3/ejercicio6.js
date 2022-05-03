/* Ejercicio 6
  Con ayuda de la función prompt pedir dos datos al usuario: Nombre, MediaElementAudioSourceNode
  Para luego imprimir en pantalla el siguiente resultado. 
  - Si el usuario tiene edad de 18 o mayor puede ingresar a la discoteca.
  - Si el usuario es menor de 18 no puede ingresar a la discoteca.
  - Si el usuario se llama Mario o Carlos puede ingresar a VIP. 
*/

const name = prompt("Por favor ingresa tu nombre: ");
const age = Number(prompt("Por favor ingresa tu edad: "));

if (age >= 18) {
  console.log("Puedes ingresar a la discoteca");
  if (name.toLowerCase() == "carlos" || name.toLowerCase() == "mario") {
    console.log("Además puedes acceder al área VIP");
  }
} else {
  console.log("Eres menor de edad y no puedes ingresar a la discoteca.");
}
