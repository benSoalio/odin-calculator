//The display
const screen = document.querySelector("#screen");

// add
const add = function (a, b) {
  return a + b;
};

//subtract
const subtract = function (a, b) {
  return a - b;
};

//multiply
const multiply = function (a, b) {
  return a * b;
};

//Divide
const divide = function (a, b) {
  return a / b;
};

//Function operate
function operate(op, a, b) {
  let result;
  switch (op) {
    case "+":
      result = add(a, b);
      break;

    case "-":
      result = subtract(a, b);
      break;

    case "*":
      result = multiply(a, b);
      break;

    case "/":
      result = divide(a, b);
      break;
  }
  return result;
}

// Function to populate the display when a number clicker
function display() {
  // get the numbers
  const numbers = document.querySelectorAll(".number");

  // Add an event listener to the buttons with class number
  let a = "";
  numbers.forEach((number) =>
    number.addEventListener("click", (e) => {
      console.log((a += e.target.textContent));
      screen.textContent = a;
    })
  );
}
display();
