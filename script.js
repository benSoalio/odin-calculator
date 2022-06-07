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
