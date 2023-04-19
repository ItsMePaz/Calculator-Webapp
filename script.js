const numberScreen = document.querySelector(".number-screen");
const numberOne = document.getElementById("number-one");
const numberTwo = document.getElementById("number-two");
const numberThree = document.getElementById("number-three");
const numberFour = document.getElementById("number-four");
const numberFive = document.getElementById("number-five");
const numberSix = document.getElementById("number-six");
const numberSeven = document.getElementById("number-seven");
const numberEight = document.getElementById("number-eight");
const numberNine = document.getElementById("number-nine");
const numberZero = document.getElementById("number-zero");
//Functions
const functionAdd = document.getElementById("function-add");
const functionSubtract = document.getElementById("function-subtract");
const functionMultiply = document.getElementById("function-multiply");
const functionDivide = document.getElementById("function-divide");
const functionDecimal = document.getElementById("decimal");
const functionEquate = document.getElementById("equate");

const firstTerm = [];
const secondTerm = [];
const ifElseOperator = [];
const screen = [];

function clearInputs() {
  numberScreen.innerText = "";
}

//
const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

/* console.log(calculator.add(2, 4));
 */
//

//Function Events
functionAdd.addEventListener("click", function () {
  const first = parseInt(screen.join(""));
  firstTerm.push(first);
  console.log(firstTerm);
  screen.length = 0;
  clearInputs();
  console.log(screen);
});

functionSubtract.addEventListener("click", function () {
  const first = parseInt(screen.join(""));
  firstTerm.push(first);
  console.log(firstTerm);
  screen.length = 0;
  clearInputs();
  console.log(screen);
  const condition = "Subtract";
  ifElseOperator.push(condition);
});

functionMultiply.addEventListener("click", function () {
  const first = parseInt(screen.join(""));
  firstTerm.push(first);
  console.log(firstTerm);
  screen.length = 0;
  clearInputs();
  console.log(screen);
  const condition = "Multiply";
  ifElseOperator.push(condition);
});

functionDivide.addEventListener("click", function () {
  const first = parseInt(screen.join(""));
  firstTerm.push(first);
  console.log(firstTerm);
  screen.length = 0;
  clearInputs();
  console.log(screen);
  const condition = "Divide";
  ifElseOperator.push(condition);
});

functionDecimal.addEventListener("click", function () {
  numberScreen.innerText += ".";
  screen.push(".");
  console.log(screen.join(""));
  console.log(screen);
});

functionEquate.addEventListener("click", function () {
  console.log(screen.join(""));
  const first = parseInt(screen.join(""));
  firstTerm.push(first);
  console.log(firstTerm);

  //ifElse
  if (ifElseOperator[0] === "Subtract") {
    const solution = calculator.subtract(firstTerm[0], firstTerm[1]);
    console.log(solution);
    numberScreen.innerText = solution.toPrecision(12);
  } else if (ifElseOperator[0] === "Add") {
    const solution = calculator.add(firstTerm[0], firstTerm[1]);
    console.log(solution);
    numberScreen.innerText = solution.toPrecision(12);
  } else if (ifElseOperator[0] === "Multiply") {
    const solution = calculator.multiply(firstTerm[0], firstTerm[1]);
    console.log(solution);
    numberScreen.innerText = solution.toPrecision(12);
  } else if (ifElseOperator[0] === "Divide") {
    const solution = calculator.divide(firstTerm[0], firstTerm[1]);
    console.log(solution);
    numberScreen.innerText = solution.toPrecision(12);
  }

  if (firstTerm.length > 2) {
    numberScreen.innerText = "";
    firstTerm.length = 0;
  }
});

//Number Events
numberOne.addEventListener("click", function () {
  numberScreen.innerText += "1";
  screen.push(1);
  console.log(screen);
});

numberTwo.addEventListener("click", function () {
  numberScreen.innerText += "2";
  screen.push(2);
  console.log(screen);
});

numberThree.addEventListener("click", function () {
  numberScreen.innerText += "3";
  screen.push(3);
  console.log(screen);
});

numberFour.addEventListener("click", function () {
  numberScreen.innerText += "4";
  screen.push(4);
  console.log(screen);
});

numberFive.addEventListener("click", function () {
  numberScreen.innerText += "5";
  screen.push(5);
  console.log(screen);
});

numberSix.addEventListener("click", function () {
  numberScreen.innerText += "6";
  screen.push(6);
  console.log(screen);
});

numberSeven.addEventListener("click", function () {
  numberScreen.innerText += "7";
  screen.push(7);
  console.log(screen);
});

numberEight.addEventListener("click", function () {
  numberScreen.innerText += "8";
  screen.push(8);
  console.log(screen);
});

numberNine.addEventListener("click", function () {
  numberScreen.innerText += "9";
  screen.push(9);
  console.log(screen);
});

numberZero.addEventListener("click", function () {
  numberScreen.innerText += "0";
  screen.push(0);
  console.log(screen);
});

/* const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

console.log(calculator.add(2, 4));
 */
