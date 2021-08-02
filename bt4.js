class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    setName(animal) {
        this.name = animal;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(animal) {
        this.weight = animal;
    }
}
let objAnimal1 = new Animal("Elephant","45.6");
let name = objAnimal1.getName();
let weight = objAnimal1.getWeight();
alert(objAnimal1.toString());

let objAnimal2 = new Animal("Mouse","45.6")
let name = objAnimal2.getName();
let weight = objAnimal2.getWeight();