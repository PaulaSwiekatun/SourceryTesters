// function viewText() {
// 	console.log("Tosia");
// }

// setTimeout(viewText, 2000) // 1 second = 1000ms mile second

const h2Element = document.querySelector(".w3-wide");
const colors = ["blue", "red", "yellow", "green", "violet"];

function changeColor() {
	const randomValue = Math.floor(Math.random() * colors.length);
	h2Element.style.color = colors[randomValue];
}

h2Element.addEventListener("click", function () {
	setTimeout(changeColor, 3000);
});
