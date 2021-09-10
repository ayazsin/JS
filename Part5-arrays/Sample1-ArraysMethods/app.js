const birth = 1980;
const ages = [30, 25, 44, 77];
const names = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayse",
  20,
  40,
  true,
  23.4,
  2021 - birth,
  ages,
];

console.log(names[10][2]);
console.log((names[3] = "canan"));
console.log(names);

//==============ARRAYS CHANGING METHODS================
const h1 = document.getElementById("fruits");
let fruits = ["Apple", "Peach", "Pear", "Banana", "Kiwi"];

fruits.pop(); //delete last element
//add element at the end of the list
//return number of element in the array
fruits.push("Strawberry", "Watermelon");
fruits.unshift("Quince"); //add element at the beginning of the array
fruits.shift(); //delete first element of the array
fruits.reverse();
fruits.sort(); //orders alphetically
//1->index of element  0 -> insert between 1->insert over the element
fruits.splice(1, 0, "Plum");
h1.innerHTML = fruits;
console.log(fruits);

//=============ARRAYS ACCESS METHODS==================
const numbers = [3, 5, 2, "2", "three", 2, "five", 5];
console.log(numbers.includes("5")); //false
console.log(numbers.includes(5)); //true

const twoIdx = numbers.indexOf(2);
console.log(twoIdx);
//if there is no such element it returns -1
console.log(numbers.lastIndexOf(2));
//merge and prints the elements
console.log(numbers.join("-"));
//converts elements to string and merge them.
const numbers2 = numbers.toString();
console.log(numbers2);
h1.innerHTML = numbers2;

const cars = ["bmw", "mercedes", "audi", "ferrari", "citroen"];
console.log(cars);
console.log(cars.slice(2));
const cars2 = cars.slice(2, 4);
cars2.push("Fiat");
console.log(cars2);

// =============CONCAT=================
const text = ["a", "b", "name", "surname", "age"];
const digits = [3, 5, 1, 4, 7];
const merged = text.concat(digits, true, true, false, [4, 7, 9]);
h1.innerHTML = merged;
