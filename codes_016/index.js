"use strict";
// - Campos em classes
class User {
}
const edu = new User();
console.log(edu);
edu.name = 'eduardo';
console.log(edu);
// - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dudu = new NewUser('dudu', 19);
console.log(dudu);
// - Props Readonly em Classes
class NewUserNew {
    constructor(name) {
        this._id = this.createID();
        this.name = name;
    }
    createID() {
        return Math.random().toString(36).slice(2);
    }
}
const cadu = new NewUserNew('cadu');
console.log(cadu);
// - Herança e super
class Home {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}
const homeVoid = new Home('casa vazia', 999);
class ConvenientHome extends Home {
    constructor(name, number, nameConvenient, mobile) {
        super(name, number);
        this.nameConvenient = nameConvenient;
        this.mobile = mobile;
    }
}
const cozinha = new ConvenientHome('Minha casa', 1090, 'Cozinha', 4);
// - this; métodos; getters; setters;
class Car {
    constructor(name, color, brand, whells = 4) {
        this.name = name;
        this.color = color;
        this.brand = brand;
        this.whells = whells;
    }
    showDetailsCar() {
        console.log(`O nome do carro é: ${this.name} e sua cor é: ${this.color}`);
    }
    get brandCar() {
        return this.brand;
    }
    set newWhells(number) {
        if (number < 4)
            return;
        this.whells = number;
        console.log('Novas rodas inseridas com sucesso!');
    }
}
const onix = new Car('onix', 'white', 'chevrolet');
onix.showDetailsCar();
console.log(onix.brandCar);
onix.newWhells = 6;
console.log(onix);
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showDetails() {
        return `O seu nome é ${this.name} e você tem ${this.age} anos.`;
    }
}
const tobby = new Pet('tobby', 9);
console.log(tobby.showDetails());
