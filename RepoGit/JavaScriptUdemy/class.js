// class
class Car {
	constructor(brand, model, year, color, movie) {
		this.brandCar = brand;
		this.modelCar = model;
		this.yearCar = year;
		this.colorCar = color;
		this.movie = movie;
	}

	sayHello() {
		console.log(
			`I am a car ${this.brandCar} model: ${this.modelCar}. I was made in: ${this.yearCar} and I am in color: ${this.colorCar}`
		);
	}

	showYear() {
		console.log(`I was made in: ${this.yearCar}`);
	}

	showMovie() {
		console.log(`I played the movie: ${this.movie}`);
	}
}

const toyota = new Car("Toyota", "Camry", 2024, "Yellow", "The Fast and the Furious");
const ford = new Car("Ford", "Mustang GT Fastback 390", 1968, "dark green", "Bullitt");
ford.sayHello();
//ford.showYear();
ford.showMovie();
toyota.sayHello();
//toyota.showYear();
toyota.showMovie();