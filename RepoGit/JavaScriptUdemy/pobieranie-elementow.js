//download-elements.js

// console.log('DZIALA!')

//Pierwszy sposob pobierania alementow - za pomoca querySelector

// const h2Band = document.querySelector("dic#and h2.w3-wide");
// const bandBox = document.querySelector("div#band");
// const snapchatIcon = document.querySelector("footer i:nth-child(3)");
// console.log(h2Band);
// console.log(bandBox);
// console.log(snapchatIcon);

//Drugi sposób pobierania elementów - querySelectorAll (pobieranie kilku elementów).

const h2Band = document.querySelector("dic#and h2.w3-wide");
const bandBox = document.querySelector("div#band");
const snapchatIcon = document.querySelector("footer i:nth-child(3)");
const div = document.querySelector("div");

const div2 = document.querySelectorAll("div");
console.log(div);
console.log(div2);

//Trzeci sposób pobierania elementow - po smaje klasie getElementClassName

const specialBtn = document.getElementsByClassName("special");
// console.log(specialBtn);

//Czwarty sposob pobierania alementów - getElementById
const navDemoElement = document.getElementById("navDemo");
console.log(navDemoElement);

//Piaty sposob pobierania elementow - pobieranie po znaczniku - getElementByTagName
const imgElement = document.getElementsByTagName("img");
console.log(imgElement);
