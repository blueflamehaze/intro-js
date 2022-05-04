/* Ejercicio 4
  Crea un programa, el cual sirva para convertir temperaturas. De Celsius a
  Fahrenheit y viceversa. Utiliza las expresiones mateméticas necesarias para
  la conversión. Que dicho programa reciba como argumentos las temperaturas y regresa el 
  resultado imprimiendo en pantalla la conversión. Tu solución es libre 
  a la imaginación. 
*/

function convertTemperature(temperatureConversion, scaleConversion) {
  if (scaleConversion == 0) {
    temperatureConversion = (temperatureConversion - 32) / 1.8;
    return temperatureConversion;
  } else if (scaleConversion == 1) {
    temperatureConversion = temperatureConversion * 1.8 + 32;
    return temperatureConversion;
  } else {
    console.log(
      "No ha ingresado una escala válida. Por favor, intente de nuevo."
    );
  }
}

const temperature = Number(prompt("Ingrese la temperatura a convetir: "));
const scale = Number(
  prompt(
    "Ingresa la escala a la que quieres convertir \n 0 - De Fahrenheit a Celsius \n 1 - De Celsius a Fahrenheit"
  )
);

const conversion = convertTemperature(temperature, scale);
console.log(conversion);
