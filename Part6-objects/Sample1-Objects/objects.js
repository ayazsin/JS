// ======================================================
//            NESNELER (OBJECTS)
//======================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.

// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT

// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.

// Object literal

const human = {
  name: "Can",
  surname: "Yilmaz",
  age: 30,
  profession: "developer",
  language: ["Java", "JS", "C++", "SQL", "Phyton"],
};

console.log(human);
console.log(human.name);
console.log(human["language"]);

const text = "My name";
console.log(`${text} is ${human.name} and my age is ${human["age"]}.`);

const selectionData = prompt(
  "What do you want to know about human ocject? Choose one: name, age, profession and language"
);

if (human[selectionData]) {
  console.log(human[selectionData]);
} else {
  console.log("Wrong chose. Please type correctly");
}

human.location = "France";
human.email = "human@SpeechGrammarList.com";
human["dateOfBirth"] = 1990;
console.log(human);

// ======================================================
//                  Nesne Metotları
// ======================================================

const person = {
  name: "Ahmet",
  surname: "Can",
  dateOfBirth: 1990,
  profession: "tester",
  tool: "selenium",
  driverLicence: true,
  age: function () {
    console.log(this);
    return new Date().getFullYear() - this.dateOfBirth;
  },
  summary: function () {
    return `${this.name} ${
      this.surname
    } is ${this.age()} years old and his profession is ${this.profession}.`;
  },
};

console.log(person.age());

const date = new Date();
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getDay());
console.log(person.summary());

// ======================================================
//                  Nesne Iterasyon Ornekleri
// ======================================================

const persons = [
  {
    name: "mustafa",
    surname: "kara",
    profession: "developer",
    age: 21,
  },
  { name: "ayse", surname: "kara", profession: "tester", age: 41 },
  {
    name: "orhan",
    surname: "tugra",
    profession: "pm",
    age: 31,
  },
];

console.log(persons);

// ÖRNEK1: kisiler dizisindeki kisilerin mesleklerini konsola yazdiralim.

persons.forEach((x) => console.log(x.profession));

// ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yeni bir diziye saklayiniz.
const ages = persons.map((x) => x.age + 1);
console.log(ages);

// ÖRNEK3: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak alan ve yaşlarini da 5 artıran yeni bir nesne oluşturan kodu yaziniz.

const upperCase = persons.map((x) => {
  return {
    name: x.name.toUpperCase(),
    age: x.age + 5,
  };
});

console.log(upperCase);

// ÖRNEK4: Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.

persons.filter((x) => x.age < 25).forEach((x) => console.log(x.name));

// ÖRNEK5: Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.

const devs = persons
  .filter((x) => x.profession == "developer")
  .map((x) => {
    return {
      name: x.name,
      age: x.age,
    };
  });

console.log(devs);
// ÖRNEK6: kisilerin ortalama yasini hesaplayiniz.

const avg = persons.reduce((x, y) => x + y.age, 0) / persons.length;
console.log(avg);
