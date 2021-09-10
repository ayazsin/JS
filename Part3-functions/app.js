//* ======FUNCTIONS======

//! 1.METHOD : FUNCTION DECLARATION

function print() {
  console.log("Ahmet");
}

//print();

//? Function with parameters
function printName(name, age) {
  console.log(`Your name is ${name}, Your age is ${age}`);
}

printName("Mustafa", 23);
printName("John", 21);

function calculateAge(birth) {
  return 2021 - birth;
}
console.log(calculateAge(1985));

function oddOrEven(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// const number = prompt("Enter a number");
// console.log(oddOrEven(number));

//! 2.METHOD : FUNCTION EXPRESSION

const oddEven = function (number) {
  return number % 2 == 0 ? "EVEN" : "ODD";
};

//console.log(oddEven(number));

//EXAMPLE: Find the greatest number

let findGreatest = function (x, y, z) {
  let greatest;
  if (x > y && x > z) {
    greatest = x;
  } else if (x < y && y > z) {
    greatest = y;
  } else if (z > y && x < z) {
    greatest = z;
  }
  return greatest;
};

console.log(findGreatest(5, 3, 8));

// ! 3.METHOD : ARROW (OK) FUNCTIONS

const sum = (a, b) => a + b; //Arrow fuction declaration

console.log(sum(5, 2)); //invoke

//Example: Power of number

const taban = 3;
const us = 2;
const power = (t, u) => t ** u;

console.log(power(taban, us));

const menu = () => {
  console.log(`============================
         JAVASCRIPT
============================`);
};

menu();

// Example
const giveInfo = (name1, surname, birth) => {
  return `My name is ${name1} ${surname} and my age is ${2021 - birth}`;
};

console.log(giveInfo("Ayse", "AYAZSIN", 1985));

// * Example volume of cylender

const r = 4;
const h = 10;
const volume = (r, h) => Math.PI * r * r * h;
console.log(volume(r, h));
