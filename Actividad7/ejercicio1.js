/* Ejercio 1
Crear un función que recibe dos parámetros (una oración y la palabra a buscar).
Retornar true o false en caso de que una oración contenga una palabra dada, es
decodeURI, si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar 
un false. En cambio si mando "mundo" entonces debe retornar true 
*/

function findWord(sentence, word) {
  var lowerCaseSentence = sentence.toLowerCase();
  var lowerWord = word.toLowerCase();
  if (lowerCaseSentence.includes(lowerWord)) {
    return true;
  } else {
    return false;
  }
}

var result = findWord("Hello world", "perro");
console.log(result);
