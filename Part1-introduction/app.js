// alert("Warning");
console.log("Hello World");
console.log("Javascript is easier than java");
// console.error("This is a error");
console.warn("This is a warning");

// ** ============ ASSIGNING VARIABLES =============== **

// var keyword ile degisken tanimlanabilir. var global bir
// degisken gibi dusunuldugu icin kullanimi azaldi.
var pi = 3.14;
console.log(pi);
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

var isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

// TODO: const ve let yeni degisken tanimlama keywordleridir
// !CONST: Sadece baslangicta deger atilir sonradan deger degismez
const piNumber = 3.14;
console.log(piNumber);

//* ------ LET --------

// Degisken degerler  icin LET kullanilir.

// ! LET Block-scope bir degiskendir. VAR ise global-scope bir tanimlamadir.

let prix;
console.log(prix);
prix = 5.5;
console.log(prix);
console.log(typeof prix);

let nom1 = "Mustafa"; //cift tirnak
let nom2 = "Ahmet"; //tek tirnak
let nom3 = `Ali Can`; //backtick

console.log(nom3);
console.log(typeof nom3);

const langue = null;
console.log(langue);
console.log(typeof langue);

const sausage = 10;
const gum = 3;
const coke = 5;
let totalPrix = sausage + gum + coke;
totalPrix++;
totalPrix += 50;
console.log(totalPrix, coke);
console.log("TOTAL: ", totalPrix);

const prenom = "Can";
const nom = "Canan";
console.log(prenom + " " + nom);

const s1 = 7,
  s2 = "7";
console.log(s1 + s2);

// Template Literal ( String Sablonlari, ES6 ile gelmistir.)
const ad = "Mesut";
const yas = "55";

console.log("Benim adim " + ad + " " + "yasim " + yas + " dir");
console.log(`Benim adim ${ad} 
yasim ${yas} dir`);

const year = 2021;
const birthday = 1980;
const age = year - birthday;
console.log(`Yas: ${year - birthday}`);

// * taking POWER of numbers
const number = 2;
const sup = 8;

const result = number ** sup;
console.log(result);

// MOD
const n1 = 123;
const ones = n1 % 10;
const tens = Math.floor(n1 / 10) % 10;
console.log("Ones: " + ones);
console.log("Tens: " + tens);
const hundreds = Math.floor(n1 / 100);
console.log("Hundreds: " + hundreds);

// ! KARSILASTIRMA OPERATORLERI
const n2 = "123";
console.log(n1 == n2); //true
console.log(n1 === n2); //false

const x = null;
const y = true;
const z = undefined;

console.log(x && y); //null
console.log(z && y && x); //undefined

//** ========== TERNARY =========== */
// const name3 = prompt("Enter your name:");
// const age1 = Number(prompt("Enter your age:"));

// age1 >= 18
//   ? console.log(`${name3} can get licence driver`)
//   : console.log(`${name3} can't get licence driver`);

const n4 = 41;
console.log(String(n4), n4);
