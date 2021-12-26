// console log example
console.log('Hello World!');

/* 
* Coding Challenge 1
* Write a variable for an item that usually changes.
* Write a variable for an item whose value won’t ever change.
*/
console.log('Coding Challenge 1');

let bananaColor = 'green';
const isBananaTree = 'no';

console.log('Banana Color:', bananaColor);
console.log('Does a banana grow on a tree?', isBananaTree);

/*
* Coding Challenge 2
* Write a string with a new line. Log it to the console.
* Write a string with single or double quotes. Log it to the console.
*/
console.log('Coding Challenge 2');
console.log('I want this \n to be on two lines.');
console.log("...and I quote \"to be, or not to be\"...");

/*
* Coding Challenge 3
* Create an object that represents you!
* Log your object to the console.
* Log your name to the console from your object.
*/
console.log('Coding Challenge 3');

const me = {
  name: 'Jane Doe',
  age: null,
  occupation: 'Student',
  isTeacher: false,
  favoriteColor: 'blue'
};

console.log('Object of Yourself:', me);

/*
* Coding Challenge 4
* Declare a variable and assign it a value.
* Log the typeof that variable.
* Reassign the value to a different data type.
* Log the typeof that variable again after re-assigning the variable to a new data type.
*/
console.log('Coding Challenge 4');

let color = 'blue';
console.log('TYPE of COLOR:', typeof color); //TYPE 1 String

console.log('reassign value');

color = false;
console.log('TYPE of COLOR:', typeof color); //TYPE 2 Boolean

/*
* Coding Challenge 5
* Write a function that takes in three parameters
*   1. a greeting
*   2. a first name
*   3. a last name
* Log the response to the console.
*/
console.log('Coding Challenge 5');
function sayHello(greeting, firstName, lastName) {
  console.log(greeting + " " + firstName + " " + lastName);
}

sayHello("Aloha", "Jane", "Doe");

/*
* Coding Challenge 6
* Write a function that adds two numbers together.
* Return the calculation from the function.
* Store the returned value to a variable.
* Log that variable to the console.
*/
console.log('Coding Challenge 6');

function addNumbers(number1, number2) {
  return number1 + number2;
}

const sum = addNumbers(2, 100);
console.log('Sum of 2 and 100:', sum);

/*
* Coding Challenge 7
* Write a function that takes in a number. 
* If the number is odd return false. 
* If the number is even, return true.
* Log the response to the console.
*/
console.log('Coding Challenge 7');

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}

console.log('Is Even:', isEven(0));

/*
* Take Home Challenge Solution
*
*/
console.log('Murder Mystery Solution');

let room = "dining room";
let suspect = "Colonel Mustard";

let weapon = "";
let solved = false;

if (room == 'dining room' && suspect == 'Colonel Mustard') {
  weapon = 'knife';
  solved = true;
} else if (room == 'billiards room' && suspect == 'Mrs. Peacock') {
  weapon = 'pool stick';
  solved = true;
} else if (room == 'gallery' && suspect == 'Professor Plum') {
  weapon = 'trophy';
  solved = true;
} else if (room == 'gallery' && suspect == 'Miss Scarlett') {
  weapon = 'poison';
  solved = true;
} else {
  solved = false;
}

// The code below will run only when `solved` is true
if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}




