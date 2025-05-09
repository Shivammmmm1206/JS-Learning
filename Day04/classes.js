// Today we will learn about classes in JS

// This is day 04 of learning JS
// Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation.

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails() {
        return `The name of the bike is ${this.name}`;
    }
}

// Creating objects of the Vehicle class
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// Accessing properties and methods
console.log(bike1.name);        // Output: Hayabusa
console.log(bike2.maker);       // Output: Kawasaki
console.log(bike1.getDetails()); // Output: The name of the bike is Hayabusa
