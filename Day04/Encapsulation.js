// we will learn about Encapsulation in this lesson

// The process of wrapping properties and functions within a single unit is known as encapsulation.

class person {
    constructor(name , id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.address = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},
        Address is ${this.address}`);
    }
}

let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails();