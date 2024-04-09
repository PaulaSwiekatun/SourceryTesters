const addInput = document.getElementById("add_input"); 
const itemList = document.getElementById("items_list"); 

function removeItem(e) {
    const removeParent = e.parentNode;
    removeParent.remove();
}

addInput.addEventListener("keyup", e => { 
    const inputValue = addInput.value.trim(); 
    if(e.code === "Enter") {  // Checking whether the Enter key has been pressed. // Sprawdzenie czy naciśnięto klawisz Enter.
        if (inputValue.length > 0) { // Checking that the text entered is not empty. // Sprawdzenie czy  wprowadzony tekst nie jest pusty.

            console.log("Item has been added");
            const newItem = document.createElement("li");
            newItem.classList.add("items"); 
            newItem.innerText = inputValue;

            const delButton = document.createElement("button");
            delButton.classList.add("del_btn");
            delButton.innerText = "Remove";

            delButton.addEventListener("click", function() {
                removeItem(this); //// Passing a reference to the button as an argument to the removeItem function. // Przekazanie referencji do przycisku jako argumentu funkcji removeItem.
            });

            newItem.appendChild(delButton);
            itemList.appendChild(newItem);

            addInput.value = ''; // Clear the add_input field after adding a product. // Wyczyszczenie pola add_input po dodaniu produktu.
        } else {
            alert("Please enter some text"); // Text entry message. // Komunikat o wprowadzeniu tekstu.
        }
    }
});

