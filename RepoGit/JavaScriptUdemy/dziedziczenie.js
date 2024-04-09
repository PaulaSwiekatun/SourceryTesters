// Inheritance.js


class SecondClass {
	second() {
		return "Second Class"
	}
}


class FirstClass extends SecondClass {  // extends + object.
	first() {
		return "First Class"
	}
}

const object1 = new FirstClass();
const object2 = new SecondClass();

//console.log(object1.first())
//console.log(object2.second())

console.log(object1.second) // Pierwsza klasa dziedziczy metody drugiej klasy. // The first class inherits the methods of the second class.



