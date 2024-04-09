for (let i = 0; i < 10; i++) {
	console.log(i);
	// Wpisz do terminala "node break-continue.js" i naciśnij enter. // Type "node break-continue.js" into the terminal and press enter.

	// Break
    
	if (i === 4) {
		console.log("is equal to");
		break; // Wstrzymuje pętle. // Pauses the loops.
	}

	// Continue
	if (i === 4 || i === 6) {
		console.log("is equal to");
        continue; // Wstrzymuje obecną iteracje, do puki nie spotka warunku. // Holds the current iteration until it meets the condition.
	}

	console.log(i);
}
