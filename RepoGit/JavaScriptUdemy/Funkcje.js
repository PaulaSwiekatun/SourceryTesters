// Function.js

// // Pierwszy sposób
// function wyswietlTekst() {
// console.log("Przykladowy tekst z funkcji")
// }


// Drugi sposob deklarowania funkcji
// const wyswietlTekst2 = function() {
//     console.log("Przykladowy tekst z funkcji 2") 
// }
// wyswietlTekst2();

// //Trzeci sposob deklarowania funkcji
// const wyswietlTekst3 = () => {
//     console.log("Przykladowy tekst z funkcji 3") 
// }
// wyswietlTekst3();

// const imie = "ALicja";
// const wiek = 35;
// const zwierze = "kot";

// function zwrocTekst(){
//     if(imie == "Alicja") {
//         console.log("Tak imie to Alicja")
//      } else {
//             console.log("Dostep zabroniony!")
//         }

//         }

// zwrocTekst();

//Parametry w funkcji. // Parameters in function.
let pierwszaLiczba = 1;
let drugaLiczba = 2;
let suma;

console.log(suma)

function dodawanieLiczb() {
suma = pierwszaLiczba + drugaLiczba;
}

dodawanieLiczb();

console.log(suma);


// function dodawanieLiczb(pierwsza, druga) {
//      console.log("wynik:" +  Number(pierwsza + druga))
//  }
    
//  dodawanieLiczb(35,12);

function dodawanieLiczb(pierwsza, druga, imie) {
console.log("wynik:" + imie + " ma obecnie " + Number(pierwsza + druga) + "lat")
}
   
dodawanieLiczb(35,12, "Rafal");

let wynik;
function dodawanieLiczb(pierwsza, druga, imie) {
   return pierwsza + druga

}


wynik = dodawanieLiczb(65, 12, "Rafal");
console.log(wynik);
if(wynik > 60) {
    console.log("Wartosc wieksza niz 60")
}

