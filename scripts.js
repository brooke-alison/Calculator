let num1 = null;
let num2 = null;
let operator = null;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const equalsButton = document.getElementById("equalsBtn");
const displayScreen = document.getElementById("displayScreen");
const decimalButton = document.getElementById("decimalBtn");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => setNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});

decimalButton.addEventListener("click", () => setDecimal());

clearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", remove);

equalsButton.addEventListener("click", operate);

function setNumber(number) {
  let currentContent = displayScreen.textContent;
  if (
    currentContent === "+" ||
    currentContent === "-" ||
    currentContent === "*" ||
    currentContent === "/"
  ) {
    displayScreen.textContent = number;
  } else if (currentContent === "0") {
    displayScreen.textContent = number;
  } else if (currentContent.length < 15) {
    displayScreen.textContent += number;
  }
  console.log(number);
}

function setOperator(op) {
  if (num1 === null) {
    num1 = parseFloat(displayScreen.textContent);
    operator = op;
  } else {
    num2 = parseFloat(displayScreen.textContent);
    operate();
    operator = op;
    num2 = null;
  }
  displayScreen.textContent = op;
}

function setDecimal() {
  let currentContent = displayScreen.textContent;

  if (!currentContent.includes(".")) {
    displayScreen.textContent += ".";
  }
}

function clear() {
  displayScreen.textContent = "0";
  num1 = null;
  num2 = null;
  operator = null;
}

function remove() {
  let currentContent = displayScreen.textContent;
  currentContent = currentContent.slice(0, -1);
  displayScreen.textContent = currentContent;
  if (currentContent.length === 0) {
    displayScreen.textContent = "0";
    num1 = null;
    num2 = null;
  }
}

function add(num1, num2) {
  let sum = num1 + num2;
  return parseFloat(sum.toFixed(14));
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  return parseFloat(difference.toFixed(14));
}

function multiply(num1, num2) {
  let product = num1 * num2;
  return parseFloat(product.toFixed(14));
}

function divide(num1, num2) {
  let quotient = num1 / num2;
  return parseFloat(quotient.toFixed(14));
}

function operate() {
  let result;
  if (num1 === null || operator === null) {
    return;
  }
  num2 = parseFloat(displayScreen.textContent);
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      if (num2 === "0") {
        result = null;
      } else {
        result = divide(num1, num2);
      }
      break;
    default:
      result = null;
      console.log("defualt");
  }
  displayScreen.textContent = result;
  num1 = result;
  operator = null;
  num2 = null;
  return result;
}
