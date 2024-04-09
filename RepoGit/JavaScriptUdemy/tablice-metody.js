// tables-methods.js

const tablica = ["Klaudia", 2, 5.35, true, {name: "Tomasz", age:24 }]
const liczby = [1,6,4,9,2,4]
const imiona = ["Rafal", "Krzys", "Ola", "Ania"]

// //weryfikacja dlugosci tablicy. // Array length verification.
// console.log(tablica.length)
// console.log(liczby.length)

//Dodawanie elementow do tablicy na sam koniec. // Adding elements to the array at the very end.
tablica.push("Wojtek")
//console.log(tablica);

//Usuwanie elementu z konca tablicy. // Removing an element from the end of an array.

tablica.pop();
liczby.pop();
console.log(tablica)
console.log(liczby)

//Ususawnie elementu z poczatku tablicy. // Deleting an element from the beginning of the array.
tablica.shift();
// tablica.shift();
// console.log(tablica)

//Znajdowanie elementow w tablicy po jej wartosci. //Finding elements in an array by its value.

const indexElement = liczby.indexOf(6)
const indexElement2 = tablica.indexOf("Klaudia")
// console.log(indexElement);
// console.log(indexElement2)

//Usuwanie dowolnego elementu z tablicy. // Deleting any item from an array.
liczby.splice(indexElement, 2) 
// console.log(liczby)

//Przekształecenie tablicy na stringa. // Converting an array to a string.
const string = liczby.join(" ");
// console.log(string);
const stringImiona = imiona.join("-");
// console.log(stringImiona)

//Odwrocenia tablicy. //Board reversals.
// imiona.reverse();
console.log(imiona)

//Sortowanie tablicy. // Sorting the array.
imiona.sort();
console.log(imiona)

//Laczenie tablic. //Joining the boards.
const superTablica = liczby.concat(imiona);
console.log(superTablica)
