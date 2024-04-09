//types.js

// Typ liczbowy (number). // Numeric type (number).
const liczba = 24;
const liczba2 = 27.54;

console.log(liczba - liczba2);

// Typ tekstowy (string). // Text (string) type.
const pierwszzeImie = "Alicja";
const zwierze = "kot";

//console.log(pierwszzeImie + " " + zwierze)

//Typ Logiczny. // Logical Type.

//const kobieta = false;
//const mezczyzna = true;

//console.log(typeof(kobieta))

// Typ null //  Typ null.

const kolor = null;

console.log(kolor);

// Typ Tablica. // Type Board.
const przykladowaTablica = ["Alicja", "Tomasz", "Bartosz", 2, true];

console.log(przykladowaTablica);

// Typ obiekt. // Type of object.
const osoba = {
	imie: "Tomasz",
	wiek: 29,
	kolorOczu: "Zielony",
	plec: "mezczyzna",
};

const zmiennaLiczbowa = "55";

console.log(osoba.wiek);

//Zabawa z typami danych. //Playing with data types.
console.log(osoba.plec.length); // mieżenie długości danego typu danych. //measuring the length of a given type of data.
console.log(przykladowaTablica[1].toLocaleUpperCase()); // przekształaca nam string na duże litery. // Converts our string to uppercase..
console.log(przykladowaTablica[1].toLocaleLowerCase()); // przekształca string na małe litery. // Converts string to lowercase.

const wynikDodawania = liczba + zwierze;
console.log(wynikDodawania);

console.log(liczba2.toFixed(0)); // zaokrągla nam wartośc do określonych miejsc po przecinku. //rounds our value to the specified decimal places.

console.log(typeof String(liczba));
console.log(Number(zmiennaLiczbowa));
