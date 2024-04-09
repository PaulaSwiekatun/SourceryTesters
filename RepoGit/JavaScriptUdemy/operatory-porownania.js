// operators-comparisons.js

// Porównania wartości == // Value comparisons ==
const imie1 = "Alicja"
const imie2 = "Alicja"


//Porownanie wartosci i typu danej wartosci. // Comparing the value and type of a given value.
//console.log(imie1 === imie2)

//Porownanie wartosci i typu. // Value and type comparison.
const wiek1 = 7;
const wiek2 = "7";
//consol.log(wiek1 === wiek2)

//Nie równy rózny. //Not equal different.
const samochod = "Fiat";
//console.log(samochod != "audi") // czy nazwa samochod nie zawiera przypadkim nazwy Audi? Zwraca True czyli dobrze samochod nazywa się Fiat a nie audi. 

//Wiekszosc i mniejszosc. // Majority and minority.
const liczba1 = 53;
const liczba2 = 63;
console.log(liczba1 > liczba2)

//consol.log(liczba1 <= liczba2) jeśli liczbya1 i liczba2 mają tą samą sumę np. 53

if(liczba1 == 53) {
    console.log("Jest rowna")
} else {
    console.log("Nie jest rowna")
}

//Operator Trójskładnikowy (?)

liczba1 == 53 ? console.log("Jest rowna2") : console.log("Nie jest rowna")
