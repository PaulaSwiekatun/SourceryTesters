**Shopping List Exercise.**

I did a Shopping List exercise using JavaScript. Which was the final assignment from the "JavaScript from the Basics 2022 (ES6)" course on the Udemy platform.

The task was to write code in JavaScript to edit the shopping list.

The index.html and style.css files were ready to download - I did not create them. 

**How to run the files?**

\1) Download the files from the repository\.

\2) Open in a code editor such as Visual Studio Code 

or 

open the page by clicking on the index file.

**What can be done with the list?**

You can add products to the list.

Remove a product from the list.

**What I did?**

* ` `Created and added a script.js file to index.html.
* Made changes to the style.css file to widen the red "Remove" button field. 
* Used CSS class-based locators.
* Ddded code changes to the new standard: 

**instead of:**

` `addInput.addEventListener("keyup", e => { 

`  `const inputValue = addInput.value; 

if(e.keyCode === 13 && inputValue.length > 0) 

**I used:**

addInput.addEventListener("keyup", e => {  

`  `const inputValue = addInput.value.trim();  

` `if(e.code === "Enter" && inputValue.length > 0)

* I've added an "Alert" security feature to prevent the product from being added using trim() spaces alone:

**Code snippet below:**

addInput.addEventListener("keyup", e => { 

` `const inputValue = addInput.value.trim(); 

` `if(e.code === "Enter") { 

`  `if (inputValue.length > 0)

*Performance by Paula Swiekatu.*


