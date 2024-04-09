const h2Element = document.querySelector('div#band h2.w3-wide');
const navbar = document.querySelector("div.w3-bar");

let switchVariable = false;

h2Element.addEventListener('click', function() {
    this.style.color = "red";
    this.style.fontSize = "56px";
    this.style.backgroundColor = "yellow"; // Poprawka: backgroundColor zamiast tylko "color"
    switchVariable = !switchVariable;
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
        navbar.style.backgroundColor = "blue"; // Poprawka: Ustawienie tła przez styl, a nie computedStyleMap
    } else {
        navbar.style.backgroundColor = "black"; // Poprawka: Ustawienie tła przez styl, a nie computedStyleMap
    }
});