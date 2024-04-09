const h2Band = document.querySelector('div#band h2')
const p = document.querySelector('p.w3-justify')
const buyTicketBtn = document.querySelector('#buy-ticket')
const formContact = document.querySelector('form')
const link = document.querySelector('div.w3-top div.w3-bar a[href="#contact"]')
const inputName = document.querySelector('input[name="Name"]')

//zdarzenie klikniecie

function showText() {
	console.log('Kliknalem w naglowek z funkcji')
}

h2Band.addEventListener('click', showText)

// h2Band.addEventListener("click", () => {
//     console.log("Kliknalem w naglowek")
// })

//slowko kluczowe this
// p.addEventListener("click", function () {
//     console.log(p)
// })

//Event
// p.addEventListener("click", e =>  {
//     if (e.clientX > 500) {
//         console.log("Wartosc jest wieksza niz 500 i wynosi" + e.clientX)
//     } else {
//         console.log("Wartosc jest mniejsza niz 500 i wynosi" + e.clientX)
//     }
// })

//Mouseover i Mouseout
// buyTicketBtn.addEventListener('mouseover', () => {
// 	console.log('Zadzialo sie')
// })

// buyTicketBtn.addEventListener('mouseout', () => {
// 	console.log('Zadzialo sie #2')
// })

//Pricent Default

formContact.addEventListener('submit', e => {
	e.preventDefault()
	console.log('TEST')
})

link.addEventListener('click', event => {
	event.preventDefault()
})

//keydown, keyup
inputName.addEventListener('keydown', e => {
	console.log(e.key)
})

inputName.addEventListener('keyup', () => {
	console.log('Uruchomiono zdarzenie KEYUP')
})

//Scroll
window.addEventListener('scroll', e => {
	console.log(window.scrollY);
})

//wykonanie zdzarzenia po wczytaniu sie w pelni naszego dokumentu objectmodel. // Execute the event after our objectmodel document is fully loaded.
window.addEventListener("DOMContentLoaded", () => {
	console.log("DOM wczytal sie poprawnie");
})