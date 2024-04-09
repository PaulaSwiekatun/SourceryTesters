// Class.js

const boxBand = document.querySelector("div#band");

const p = document.createElement("p");
const link = document.createElement("a");

p.innerText = "nowy super paragraf";
link.innerText = "Przekierowanie do Google.com";

//dodawanie i usuwanie klass:

p.classList.add("active");
p.classList.add("active2");
p.classList.remove("active2");

// Dodawanie i usuwanie atrybutów. //Adding and removing attributes.

link.setAttribute("href", "https://google.com");
link.removeAttribute("href");

link.id = "super-link"

boxBand.appendChild(p);
boxBand.appendChild(link);

