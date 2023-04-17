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

const screen = [];

function clearInputs() {
  numberScreen.innerText = "";
}

//Function Events
functionAdd.addEventListener("click", function () {
  numberScreen.innerText += "+";
  console.log(parseInt(screen.join("")));
  clearInputs();
  console.log(screen);
});

functionSubtract.addEventListener("click", function () {
  numberScreen.innerText += "-";
  console.log(parseInt(screen.join("")));
  clearInputs();
  console.log(screen);
});

functionMultiply.addEventListener("click", function () {
  numberScreen.innerText += "x";
  console.log(parseInt(screen.join("")));
  clearInputs();
  console.log(screen);
});

functionDivide.addEventListener("click", function () {
  numberScreen.innerText += "/";
  console.log(parseInt(screen.join("")));
  clearInputs();
  console.log(screen);
});

functionDecimal.addEventListener("click", function () {
  numberScreen.innerText += ".";
  screen.push(".");
  console.log(screen.join(""));
  console.log(screen);
});

functionEquate.addEventListener("click", function () {
  console.log(screen.join(""));
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
