// const s1 = +prompt("First number:");
// const operation = prompt("Operation:");
// const s2 = +prompt("Second number:");
// let result = 0;

// if (operation == "+") {
//   result = s1 + s2;
// } else if (operation == "-") {
//   result = s1 - s2;
// } else if (operation == "*") {
//   result = s1 * s2;
// } else if (operation == "/") {
//   result = s1 / s2;
// } else {
//   alert("The wrong operation.");
// }

// console.log(`${s1} ${operation} ${s2} = ${result}`);

// const age = prompt("Enter your age:");
// const health = prompt("Are you healthy e/h");

// alert(age > 18 && health == "e" ? "Military service" : "Job");

// let day = "";
// const dayNo = +prompt("Day number:");
// switch (dayNo) {
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   default:
//     alert("Enter 1-3 ");
// }

// console.log(day);

// let maas = +prompt("Your salary:");
// const workingyears = +prompt("Working years: ");

// workingyears < 6
//   ? (maas += maas * 0.1)
//   : workingyears < 11
//   ? (maas += maas * 0.2)
//   : (maas += maas * 0.5);
// console.log(maas);

// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺");

//LOOPS

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}-M`);
// }

//Prime numbers

// let prime = true;

// const number = 7 //prompt("Enter a number:");
// for (let i = 2; i * i < number; i++) {
//   if (number % i == 0) {
//     prime = false;
//     break;
//   }
// }

// console.log(prime);

//ÖRNEK: do- while döngüsü
// let not;
// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Giridiğiniz not 0-100 arasındadır");

// //ÖRNEK: while döngüsü
// let not;
// not = prompt("0-100 arasında bir not giriniz:");
// while (not < 0 || not > 100) {
//   console.error("Girilen not 0-100 arasında olmalıdır.");
//   not = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Giridiğiniz not 0-100 arasındadır");

// ÖRNEK: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let not1;
let i = 1;
while (true) {
  not1 = prompt(i + ".kisinin notunu giriniz:");
  not1 = not1.toLowerCase(); // girilen karakteri küçük harfe çeviriyoruz.
  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
