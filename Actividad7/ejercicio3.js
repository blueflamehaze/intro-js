/* Ejercicio 3
Desarrolla un método para verificar si una palabra es un palíndromo.
Casos de prueba: var word1= "madam", var word2="computadora" 
*/

var word1 = "madam";
var word2 = "computadora";
var word3 = "Bob";

function getPalindrome(word) {
  let wordArray = word.split("");
  let sortedArray = word.split("").reverse();
  let stringWord = wordArray.toString().toLowerCase();
  let sortedWord = sortedArray.toString().toLowerCase();
  if (stringWord === sortedWord) {
    console.log("Es un palíndromo");
  } else {
    console.log("No es un palíndromo");
  }
}

const resultPalindrome = getPalindrome(word1);
console.log(resultPalindrome);
