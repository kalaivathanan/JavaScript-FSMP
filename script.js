/*Author: kalaivathanan,
Date :04-07 - 2024, 

*/

//variables

let length = 20;
let width = 10;
let area = length * width;
document.getElementById("area").textContent = area;

// Arithmetic Operators
// Operator + - * /

function calculate(operator) {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let answer;
  if (input1 === "" && input2 === "") {
    alert(`please enter the input value in  input 1 and input 2`);
  } else if (input1 === "" || input2 === "") {
    alert(`please enter the input value in  ${input1 === "" ? "input1" : "input 2"}`);
  } else {
    input1 = Number(input1);
    input2 = Number(input2);
    if (operator === "+") answer = input1 + input2;
    else if (operator === "-") answer = input1 - input2;
    else if (operator === "/") answer = input1 / input2;
    else answer = input1 * input2;
    document.getElementById("display").value = answer;
  }
}

// Accept User Input
function greet() {
  let name = window.prompt("What Is your Name?");
  if (name) alert(`Hello "${name}" Welcome to Our Assignment page`);
  else alert(`Please Enter Your Name`);
}

//Type Conversion
function convert() {
  age = document.getElementById("age").value;

  document.getElementById(
    "before-convert"
  ).textContent = `Before Convert the input value - input type is "${typeof age}" and increase by 1 :- ${age} + 1 = ${
    age + 1
  }`;

  age = Number(age);

  document.getElementById(
    "after-convert"
  ).textContent = `After Convert the input value - input type is "${typeof age}" and increase by 1 :- ${age} + 1 = ${
    age + 1
  }`;
}

// Constants

function Constants() {
  let radius = +document.getElementById("radius").value;
  const PI = 3.15;
  let circumference = 2 * (PI * radius);
  document.getElementById("circumference").textContent = `circle circumference is :  ${circumference}`;
}

// Counter Program
let counterValue = 0;
function count(click_id) {
  const counterElement = document.getElementById("count");

  switch (click_id) {
    case "+":
      counterValue++;
      counterElement.textContent = counterValue;
      break;
    case "-":
      counterValue--;
      counterElement.textContent = counterValue;
      break;
    default:
      counterValue = 0;
      counterElement.textContent = counterValue;
      break;
  }
}

// Math Object
function random() {
  let min = +document.getElementById("min").value;
  let max = +document.getElementById("max").value;

  let value = Math.round(Math.random() * (max - min) + min);
  document.getElementById("random").textContent = `random number is : ${value}`;
}

// Random Number Generator

function UserGuess() {
  let min = +document.getElementById("UserGuess-min").value;
  let max = +document.getElementById("UserGuess-max").value;
  let randomValue = Math.round(Math.random() * (max - min) + min);
  let attempt = 0;

  while (true) {
    let userInput = prompt(`Guess the number between ${min} and ${max}:`);

    if (isNaN(userInput)) {
      alert(`please enter any number!`);
      continue;
    }
    userInput = Number(userInput);
    attempt++;

    if (randomValue === userInput) {
      alert(`Congratulations! You guessed the number ${randomValue} correctly in ${attempt} attempts.`);
      break;
    } else if (randomValue < userInput) {
      alert("Too high! Try again.");
    } else {
      alert("Too low! Try again.");
    }
  }
}

// If Statements
function checkNumber() {
  let number = +document.getElementById("number").value;
  let message = number % 2 === 0 ? "Given number is even" : "Given number is odd";

  alert(message);
}

// Checked Property
function checkCheckbox() {
  const checkBox = document.getElementById("checkbox");
  const result = document.getElementById("checkbox-result");

  if (checkBox.checked) result.textContent = `Check Box is Checked`;
  else result.textContent = `Check Box is Unchecked`;
}

//ternary Operator
function checkCheckbox1() {
  const checkBox = document.getElementById("checkbox1");
  const result = document.getElementById("checkbox-result1");

  checkBox.checked
    ? (result.textContent = `Check Box is Checked`)
    : (result.textContent = `Check Box is Unchecked`);
}

// Switches;
function correspondingDay() {
  const day_number = document.getElementById("day-number");
  const day_result = document.getElementById("day-result");

  switch (Number(day_number.value)) {
    case 1:
      day_result.textContent = "SUNDAY";
      break;
    case 2:
      day_result.textContent = "MONDAY";
      break;
    case 3:
      day_result.textContent = "TUESDAY";
      break;
    case 4:
      day_result.textContent = "WEDNESDAY";
      break;
    case 5:
      day_result.textContent = "THURSDAY";
      break;
    case 6:
      day_result.textContent = "FRIDAY";
      break;
    case 7:
      day_result.textContent = "SATURDAY";
      break;
    default:
      day_result.textContent = "Please enter the correct day";
      break;
  }
}

// String Methods
function countVowels() {
  const sentence = document.getElementById("sentence");
  const sentence_result = document.getElementById("sentence-result");

  let lowercase = sentence.value.toLowerCase();
  let countVowels = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < lowercase.length; i++) {
    if (vowels.includes(lowercase[i])) {
      countVowels++;
    }
  }
  sentence_result.textContent = `Number of Vowels on This sentence : ${countVowels}`;
}

// String Slicing
function findURL() {
  const url = document.getElementById("url");
  const url_result = document.getElementById("url-result");

  let domain = url.value.replace(/(^\w+:|^)\/\//, "");

  domain = domain.slice(0, domain.indexOf("/"));

  if (domain.startsWith("www.")) domain = domain.slice(4, domain.indexOf("/"));

  url_result.textContent = `extracts domain name is "${domain}"`;
}

// Method Chaining
function chaining() {
  const chaining_string = document.getElementById("chaining-string").value;
  const chaining_result = document.getElementById("chaining-result");

  chaining_result.textContent = chaining_string.toUpperCase().split().reverse().join().replace("A", "B");
}

// Logical Operators
function eligibleVoting() {
  const logical_age = +document.getElementById("logical-age").value;
  const logical_nationality = document.getElementById("logical-nationality").value;
    const logical_result = document.getElementById("logical-result");

    let nationality = logical_nationality.trim().replace(' ', '').toLowerCase();
    
    if (logical_age >= 18 && nationality == 'srilanka')
        logical_result.textContent = "This person eligible for voting";
    else
    logical_result.textContent = "This person not eligible for voting";
}

//Strict Equality

