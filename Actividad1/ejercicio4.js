/* Ejercicio 4
  Escribe un programa que calcule el área de un rombo, sabiendo que D=8cm, 
  d = 6cm. (Fórmula: a=Dxd/2)
*/

const majorDiagonal = 8;
const minorDiagonal = 6;
const area = (majorDiagonal * minorDiagonal) / 2;
console.log(area);
alert("El área del rombo es: " + area + " cm^2");
