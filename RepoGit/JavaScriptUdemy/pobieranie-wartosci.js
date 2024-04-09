// download-values.js

const p = document.querySelector("p.w3-justify");
const h2Band = document.querySelector("div#band h2");
const value = p.innerText;
const pWeLoveMusic = document.querySelector("p.w3-opcity");
const img = document.querySelector("img.w3-image");
const inputName = document.querySelector('input[name="Name"]');

//console, console.log(value);

//console.log(h2Band.innerText); // tylko odczytanie // reading only.

//console.log(pWeLoveMusic.innerText); //zwraca tylko wartość tekstową. //returns only a text value.
// console.log(pWeLoveMusic.innerHTML); // zwraca tesks i operator przypisania <i> // Returns the text and assignment operator <i>

//console.log(img.getAttribute("src")); //podaje atrybut i ścieżkę. //provides the attribute and path.

//console.log(img.Style.width) // odwoływanie się do stylów CSS (tu szerokość zdjęcia). // referencing CSS styles (here the width of the photo).

// Pobieranie tekstu z dynamicznych elementów // Getting text from dynamic elements.

//input
//console.log(inputName.value);

inputName.addEventListener("heyup", () => {
	console.log(inputName.value);
});
