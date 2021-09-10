// *============ FOR IN =================

const coordinations = [120, 100, -100, 220, 330];
let negative = 0;
let positive = 0;

for (let i in coordinations) {
  coordinations[i] < 0 ? negative++ : positive++;
}

console.log(
  `Negative coordination: ${negative} Positive coordination: ${positive}`
);

const animals = [
  "elephant",
  "oystrich",
  "bird",
  "camel",
  "rat",
  "cat",
  "camel",
];
const find = "camel"; //prompt("Enter the animal name:").toLowerCase();
const findReturn = function (find) {
  let numberOfAnimal = 0;
  for (let i in animals) {
    if (animals[i] == find) {
      numberOfAnimal++;
    }
  }

  return numberOfAnimal;
};

const number = findReturn(find);
number == 0
  ? console.log("There is no such kind of animal")
  : console.log(`There is/are ${number} ${find}/s.`);

// *=========== FOR OF ===================

let cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let i of cars) {
  text += i + " ";
}

console.log(text);

let students = ["John", "Ali", "Can"];

function print(x) {
  console.log(x);
}

students.forEach(print);
students.forEach((x) => console.log(x));

//Example: Sum
const prices = [200, 300, 125, 450, 333, 123];
let sum = 0;
prices.forEach((x) => (sum += x));
console.log(sum);
document.querySelector(".p").innerHTML = `${sum}$`;

sum = 0;
prices.forEach((a, i) => {
  console.log(` ${i} . iteration: ${sum}`);
  sum += a;
});
console.log(sum);
document.querySelector(".p").innerHTML = `${sum}$`;

//add %10 each price

let sumPrices = 0;
prices.forEach((d, i, array) => {
  array[i] = (d * 1.1).toFixed(2);
  sumPrices += Number(array[i]);
});
console.log(prices);
console.log(sumPrices);

// ============ MAP METHOD =============
const digits = [3, 5, 3, 2, 6, 7, 9];
const twoTimes = digits.map((x) => x * 2);
console.log(twoTimes);

const names = ["Ahmet", "mehmet", "ismet", "SAFFET"];

const upper = names.map((x) => x.toUpperCase());
upper.forEach((x) => console.log(x));
console.log(upper);
names.map;

//Dolar, Euro rates
tlprices = [120, 340, 550, 245, 322.5, 789];

const dollarRate = document.querySelector(".dollar");
const euroRate = document.querySelector(".euro");
const dollar = document.querySelector(".dollar-prices");
const euro = document.querySelector(".euro-prices");

dollarRate.onchange = function () {
  dollarRate.value < 0
    ? alert("Wrong rate")
    : (dollar.innerHTML = tlprices.map((x) =>
        Math.round(x / dollarRate.value)
      ));
};

euroRate.onchange = function () {
  euroRate.value < 0
    ? alert("Wrong rate")
    : (euro.innerHTML = tlprices.map((x) => Math.round(x / euroRate.value)));
};

// below 250 => %10 addition
// over 250 => %20 addition

const increasedPrices = tlprices.map((v, i) => {
  if (v < 250) {
    return `${i + 1}. product's increased price is ${v * 1.1} <br>`;
  } else {
    return `${i + 1}. product's increased price is ${v * 1.2} <br>`;
  }
});
const stringIncreasedPrices = increasedPrices.join("");
console.log(stringIncreasedPrices);
document.querySelector(".increased-prices").innerHTML = stringIncreasedPrices;

// ======================================================
//                       FILTER METODU
// ======================================================
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri
// bir diziye saklayalim.

const small250 = tlprices.filter((d) => d < 250);
console.log(small250);

//if tlprices are lower than 350 make it different array
tlprices.filter((d) => d < 350).forEach((x) => console.log(x));

//sorting ascending
console.log(tlprices.sort((a, b) => a - b));

//sorting descending
console.log(tlprices.sort((a, b) => b - a));

console.log(tlprices.sort());

// ======================================================
//                       PIPELINE
// ======================================================

//-------------- ÖRNEK -------------------
// maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.

const salaries = [3000, 5000, 4000, 6500];

const increasedSalaries = salaries.filter((v) => v <= 400).map((v) => v * 1.5);
console.log(increasedSalaries);

salaries
  .filter((v) => v > 4000)
  .map((v) => v * 1.25)
  .forEach((v) => console.log(v));

//--------------EXAMPLE----------------
const nms = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

const findLetter = (letter) => {
  nms.filter((x) => x.startsWith(letter)).forEach((x) => console.log(x));
};

findLetter("S");

// ======================================================
//                       REDUCE METODU
// ======================================================
// ! const maaslar = [3000, 5000, 4000, 6000, 6500];
// maaslarin toplamini bulunuz.

const sumSalarie = salaries.reduce((x, y, i) => {
  console.log(`${i} iteration : ${x}`);
  return x + y;
});
console.log(sumSalarie);

// 4000 den buyuk olan maaslarin toplamini hesaplayiniz.
const greaterThan4000 = salaries
  .filter((x) => x >= 4000)
  .reduce((x, y) => x + y);
console.log(greaterThan4000);

// maasi ortalamanin altinda olanlara %20 zam yapalim.

const avgSalaire = salaries.reduce((x, y) => x + y, 0) / salaries.length;
const newIncSalaire = salaries
  .filter((x) => x < avgSalaire)
  .map((x) => x * 1.2);
console.log(newIncSalaire);
