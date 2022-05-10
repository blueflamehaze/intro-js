// Inicializar el contador
let count = 0;

// Traer el elemento
let value = document.getElementById("counter");

// Metodo del evento incrementar

function increment() {
  count++;
  value.textContent = count;
}

// Decrementar sin llegar a números negativos
function decrease() {
  if (value.textContent > 0) {
    count--;
    value.textContent = count;
  } else {
    alert("No puedes disminuir a números negativos");
  }
}

function resetCounter() {
  count = 0;
  value.textContent = count;
}
