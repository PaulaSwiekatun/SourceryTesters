const h2Element = document.querySelector(".w3-wide");

function executeAlert() {
	//Alert informacyjny. // Information alert.
	alert("Yes, we managed to click the headline!");
}

// Alert typu Confirm. // Confirm alert.
function executeAlert2() {
	if (confirm("Do you accept the regulations?")) {
		console.log("User has accepted the regulations");
	} else {
		console.log("User rejected the regulations");
	}
}

// Alert typu Prompt. // Prompt Alert.

function executeAlert3() {
	const userName = prompt("What's your name?", "Enter name..."); // "What's your name?\abcd - enline"
	console.log("User name " + userName);
}

h2Element.addEventListener("click", executeAlert2); 
