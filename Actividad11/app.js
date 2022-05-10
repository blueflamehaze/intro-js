const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.getElementById("equal");
const reset = document.querySelector(".reset");
const eraseNumber = document.querySelector(".delete");
var result = document.getElementById("result");
var currentOperation = "";
var lastOperation = "";
var operation = undefined;

// Hay que recorrer la varible numbers que tiene todos los números que tengan la clase .number
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    // Llamar al método que va a concatenar cada número en el que se vaya haciendo click
    addNumber(number.innerText);
  });
});

// Hay que recorrer la variable operations que tiene todas las operaciones que tengan la clase .operation
operations.forEach(function (operation) {
  operation.addEventListener("click", function () {
    // Llamar al método que va a evaluar que operación hay que realizar
    selectOperation(operation.textContent);
  });
});

eraseNumber.addEventListener("click", deleteNumber);

function deleteNumber() {
  if (currentOperation != "") {
    currentOperation = currentOperation.slice(0, -1);
  }
  if (result.value != "" && undefined) {
    result = result.value.toString().slice(0, -1);
  }
  updateDisplay();
}

equal.addEventListener("click", function () {
  calculate();
  updateDisplay();
});

reset.addEventListener("click", function () {
  clear();
  updateDisplay();
});

// Este es el método que va a concatenar los números en los que el usuario vaya haciendo click.
// Recibé como parametro el valor del número en el que se hizo click. Utilice toString() porque no quiero
// que sume los números sino que los convierta en uno solo
function addNumber(num) {
  currentOperation = currentOperation.toString() + num.toString();
  updateDisplay();
}

function updateDisplay() {
  result.value = currentOperation;
}

function clear() {
  currentOperation = "";
  lastOperation = "";
  operation = undefined;
}

function selectOperation(operator) {
  if (currentOperation === "") return;
  if (currentOperation !== "") {
    calculate();
  }
  // El resultado de la operación será el valor de la operación actual
  operation = operator;
  // La operación actual se va a convertir en la operación actual para permitir seguir haciendo operaciones
  lastOperation = currentOperation;
  // La operación actual debe de quedar vacía
  currentOperation = "";
}

function calculate() {
  let finalResult = 0;
  // Hacer un switch para colocar todas las posibles opciones de operaciones
  switch (operation) {
    case "+":
      finalResult = parseFloat(lastOperation) + parseFloat(currentOperation);
      break;
    case "-":
      finalResult = parseFloat(lastOperation) - parseFloat(currentOperation);
      break;
    case "*":
      finalResult = parseFloat(lastOperation) * parseFloat(currentOperation);
      break;
    case "/":
      finalResult = parseFloat(lastOperation) / parseFloat(currentOperation);
      break;
    default:
      return;
  }
  // Al finalizar falta hacer que la operación actual sea la misma que el finalResult, operation a undefined
  // porque no hay selección y lastOperation a vacío para que se pueda usar otra vez
  currentOperation = finalResult.toString();
  lastOperation = "";
  operation = undefined;
}
