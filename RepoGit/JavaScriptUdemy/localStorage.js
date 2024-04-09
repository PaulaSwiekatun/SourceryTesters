// Zapisywanie do Local Storage. // Save to Local Storage.

localStorage.setItem("title", "Game Cookie Monster");
localStorage.setItem("score cookie", "24");
localStorage.setItem("name", "Sid");
localStorage.setItem("rank", "Blue");

// Odczytywanie z Local Storage. // Reading from Local Storage.
const titleGame = localStorage.getItem("title");
console.log(titleGame);

// Usuwanie elementów z Local Storage. // Deleting items from Local Storage.
localStorage.removeItem("title");

// Usuwanie wszystkich elementów z Local Storage. // Removing all items from Local Storage.
// localStorage.clear();

if (confirm("Are you sure you want to delete the data?")) {
	localStorage.clear();
	alert("Data has been deleted");
} else {
	alert("Failed to clear data");
}
