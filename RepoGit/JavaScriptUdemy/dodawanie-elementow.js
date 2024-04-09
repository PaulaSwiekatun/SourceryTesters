// Adding-Elements.js


const form = querySelector('form')
const boxBand = document.querySelector('div#band')

//Tworzenie nowego elementu
const divElement = document.createElement('div')

divElement.style.width = '100px'
divElement.style.height = '100px'
divElement.style.backgroundColor = 'red'

const p = document.createElement('p')
p.innerText = 'nowy super paragraf'

console.log(divElement)
console.log(p)

//Wstawianie elementu do HTML (DOM)
from.appendChild(divElement)
boxBand.appendChild(p)
