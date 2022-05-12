let inicio = document.getElementById("inicio");
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");
let jugador3 = document.getElementById("jugador3");

inicio.addEventListener("click", iniciar);

function iniciar() {
  console.log("Iniciar");
  //.style es para acceder a los estilos. Le colocamos display none para ocultar el elemento.
  inicio.style.display = "none";

  let intervalo = setInterval(carrera, 150);

  let position1 = 0;
  let position2 = 0;
  let position3 = 0;

  function carrera() {
    position1 += Math.round(Math.random() * 20);
    jugador1.style.left = `${position1}px`;

    position2 += Math.round(Math.random() * 20);
    jugador2.style.left = `${position2}px`;

    position3 += Math.round(Math.random() * 20);
    jugador3.style.left = `${position3}px`;

    if (position1 >= 663) {
      alert("Ganó el rojo");
      clearInterval(intervalo);
    } else if (position2 >= 663) {
      alert("Ganó el azul");
      clearInterval(intervalo);
    } else if (position3 >= 663) {
      alert("Ganó el amarillo");
      clearInterval(intervalo);
    }
  }
}
