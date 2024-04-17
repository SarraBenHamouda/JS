class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drinks sake and gains 10 health. Current health: ${this.health}`);
    }
}

// Usage example
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
