/* 

Mi solución
const screen = document.getElementById("showImage");
const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.getElementById("#document");

function changeImage(e) {
  if (e.target.textContent == 1) {
    let source = "img1.jpg";
    screen.setAttribute("src", source);
    title.textContent = "Imagen 1";
    description.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }
  if (e.target.textContent == 2) {
    let source = "img2.jpg";
    screen.setAttribute("src", source);
    title.textContent = "Imagen 2";
    description.textContent =
      "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }
  if (e.target.textContent == 3) {
    let source = "img3.jpg";
    screen.setAttribute("src", source);
    title.textContent = "Imagen 3";
    description.textContent =
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }
}

document.addEventListener("click", changeImage);
 */

// Solución de la clase
let db = [
  { id: 1, titulo: "Titulo 1", img: "img1.jpg", description: "Descripción 1" },
  { id: 2, titulo: "Titulo 2", img: "img2.jpg", description: "Descripción 2" },
  { id: 3, titulo: "Titulo 3", img: "img3.jpg", description: "Descripción 3" },
];

const screen = document.getElementById("showImage");
const buttons = document.querySelector("#buttons");
const txt1 = document.querySelector("h1");
const txt2 = document.querySelector("p");

function cambioContent(e) {
  let info = db.filter((item) => item.id == e.target.textContent);
  info.forEach((element) => {
    screen.setAttribute("src", element.img);
    txt1.textContent = element.titulo;
    txt2.textContent = element.description;
  });
}

buttons.addEventListener("click", cambioContent);
