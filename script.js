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
  ).textContent = `Before Convert the input value - input type is "${typeof age}" and increase by 1 :- ${age} + 1 = ${age + 1
    }`;

  age = Number(age);

  document.getElementById(
    "after-convert"
  ).textContent = `After Convert the input value - input type is "${typeof age}" and increase by 1 :- ${age} + 1 = ${age + 1
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
  let min = 1;
  let max = 100;
  let randomValue = Math.round(Math.random() * (max - min) + min);
  let attempt = 0;

  while (true) {
    let userInput = prompt(`Guess the number between ${min} and ${max}:`);

    if (userInput === 'exit') {
      return;
    } else if (isNaN(userInput)) {
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

  (checkBox.checked)
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

  let nationality = logical_nationality.trim().replace(" ", "").toLowerCase();

  if (logical_age >= 18 && nationality == "srilanka")
    logical_result.textContent = "This person eligible for voting";
  else logical_result.textContent = "This person not eligible for voting";
}

//Strict Equality
function strictEqual() {
  const strict_first = +document.getElementById("strict-first").value;
  const strict_second = document.getElementById("strict-second").value;
  const strict_result = document.getElementById("strict-result");

  if (strict_first === strict_second)
    strict_result.textContent = `"${strict_first}" and "${strict_second}" are Equal`;
  else strict_result.textContent = `${strict_first} and "${strict_second}" are Not Equal`;
}

//While Loops
function countDown() {
  let count_number = +document.getElementById("count-number").value;
  const count_result = document.getElementById("count-result");

  while (count_number >= 0) {
    count_result.textContent += `${count_number} ,`;
    count_number--;
  }
}

//for Loops
function evenNumber(min, max) {
  const even_result = document.getElementById('even-result');
  for (min; min <= max; min++) {

    if (min % 2 == 0) {
      even_result.textContent += `${min} ,`
    }

  }
}


//Number Guessing Game
function numberGuess() {
  let min = +document.getElementById("numberGuess-min").value;
  let max = +document.getElementById("numberGuess-max").value;
  let randomValue = Math.round(Math.random() * (max - min) + min);
  let attempt = 0;

  while (true) {
    let userInput = prompt(`Guess the number between ${min} and ${max}: If you want to Exit then enter : "exit"`);

    if (userInput === 'exit') {
      return;
    } else if (isNaN(userInput)) {
      alert(`please enter any number!`);
      continue;
    } else if (Number(userInput) < min || Number(userInput) > max) {
      alert(`please enter any a valid number!`);
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

//function
function sum(num1, num2) {
  const sum_result = document.getElementById('sum-result');
  sum_result.textContent = `first number is 20 and second number is 30 = ${num1 + num2}`;

}

//variable Scope
function variableScope(click_id) {
  const variable_result = document.getElementById("variable-result");
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  variable_result.append(p1, p2);

  let global = 'global';

  function inside() {
    let local = 'local';
    p1.textContent = `Accessing global variable inside the function : ${global}`;
    p2.textContent = `Accessing local variable inside the function : ${local}`;
  }

  function outside() {
    p1.textContent = `Accessing global variable outside the function: ${global}`;
    p2.textContent = `Accessing local variable outside the function: can not access the local variable out side the function`;

  }
  if (click_id === 'inside') {
    inside();
  } else {
    outside();
  }


}

//Temperature Conversion Program
function temperature(click_id) {
  const temp_input = +document.getElementById('temp-input').value;
  const temp_result = document.getElementById('temp-result');

  switch (click_id) {
    case 'Celsius':
      temp_result.textContent = `Fahrenheit to Celsius ${((temp_input - 32) * 5 / 9).toFixed(1)} ℃`;
      break;
    case "Fahrenheit":
      temp_result.textContent = `Celsius to Fahrenheit ${((temp_input * 9 / 5) + 32).toFixed(1)} ℉`;
      break;

    default:

      break;
  }
}

//Arrays
function arraySum() {

  const array_result = document.getElementById("array-result");
  
  alert("Please enter the 5 numbers one by one")
  let number_array = [5];
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    const number = +prompt(`Enter the number ${i+1}`);
    number_array[i] = number;
  }

  for (let a = 0; a < number_array.length; a++) {
    sum += number_array[a];
  }

  array_result.textContent = `Sum of Array Value is ${sum}`;
  
}

//Spread Operator
function spreadArray() {
  const spread_result = document.getElementById("spread-result");
  let array1 = [10, 20, 30];
  let array2 = [40, 50, 60];
  let array3 = [];
  array3 = [...array1, ...array2];
  spread_result.textContent = `Array1 value ${array1} Array2 value ${array2}  spread two Arrays ${array3}`;
}

//Rest Parameters 
function restArray() {
  const rest_result = document.getElementById("rest-result");

  function rest(...numbers) {
    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
  rest_result.textContent = rest(10,20,30,40,50,60);
}

//diceRoller
function diceRoller() {
  const diceRoller_side = +document.getElementById('diceRoller-side').value;
  const diceRoller_result = document.getElementById('diceRoller-result');

  diceRoller_result.textContent=`Dice Roller Result is ${ Math.floor(Math.random() * diceRoller_side+1)} `;
}

//Random Password Generator
function randomPass() {
  const randomPass_length = +document.getElementById("randomPass-length").value;
  const randomPass_result = document.getElementById("randomPass-result");

  const numbers = '0123456789';
  password =''

  for (let i = 0; i < randomPass_length; i++) {

   randomNumberIndex= Math.round(Math.random() * numbers.length)
    password += numbers.charAt(randomNumberIndex);
  }

  randomPass_result.textContent = `Dice Roller Result is ${password} `;
}

//Callbacks
function callBack() {
  const Callbacks_result = document.getElementById("callBack-result");

  function callBackFun(callBack) {
    setTimeout(callBack, 3000);
  }

  function callBackFun1() {
      Callbacks_result.textContent = `CallBack Function Calling`;
  }
  callBackFun(callBackFun1);

}

//forEach()
//element, index,array
function forEach() {
  let number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  number_array.forEach(display)

  function display(params) {
    console.log(params);
  }
}

//map
function map() {
  let number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const squares= number_array.map(square)
  console.log(squares);


  function square(ele) {
    return Math.pow(ele,2)
    
  }
  
}

//filter()
function filterArray() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let evenNumber = numbers.filter(isEven);
  console.log(evenNumber);

  function isEven(element) {
    return element % 2 === 0;
    
  }
}

//reduce
function reduceArray() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let total = numbers.reduce(sum)
console.log(total);
  function sum(accumulator, element) {
    return accumulator + element;
    
  }
}

//Function Expressions 
function funExpressions() {

  const printMessage = function () {
    console.log("Hello, world!");
  };
  
  printMessage();
  
}

//Arrow Function
function funArrow() {

  const printMassage = (name) => `Hello ${name} !`;
  console.log(printMassage('kalai')); 

}