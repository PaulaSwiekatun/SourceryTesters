let counter = 0;

function viewText() {
	if (counter === 8) {

		clearInterval(start);
    }
		console.log("Test");
		counter++;
	}

//setInterval(viewText, 2000) // Set interval executes all the time !!! To stop the action you need to use the shortcut ctrl + C !!! // Set interval wykonuje się cały czas !!! Żeby zatrzymać akcje trzeba użyć skrótu ctrl + C !!!

// Jest możliwość zatrzymania setInterval istrukcją kodu. Użyłam licznika i konstrukcji if aby za 8 razem przerwać akcje - clearInterval(start).

// There is an option to stop setInterval with a code instruction. I used a counter and an if construction to stop the action in the 8th time - clearInterval(start).

const start = setInterval(viewText, 2000);
