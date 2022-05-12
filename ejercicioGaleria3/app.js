/* 
  Método 1
const parrafo = document.querySelector("p");
const imagenPrincipal = document.querySelector("#pantalla");
const miniaturas = document.querySelectorAll(".miniatura");

function cambiarImagen(e) {
  let atributo = e.target.getAttribute("src");
  let nombre = e.target.getAttribute("name");

  parrafo.textContent = nombre;
  imagenPrincipal.setAttribute("src", atributo);
}

//   Método 2

miniaturas[0].addEventListener("click", cambiarImagen);
miniaturas[1].addEventListener("click", cambiarImagen);
miniaturas[2].addEventListener("click", cambiarImagen);
miniaturas[3].addEventListener("click", cambiarImagen);
 */

const parrafo = document.querySelector("p");
const imagenPrincipal = document.querySelector("#pantalla");
const miniaturas = document.querySelector("#container-imgs");

function cambiarImagen(e) {
  let atributo = e.target.getAttribute("src");
  let nombre = e.target.getAttribute("name");

  parrafo.textContent = nombre;
  imagenPrincipal.setAttribute("src", atributo);
}

miniaturas.addEventListener("click", cambiarImagen);
