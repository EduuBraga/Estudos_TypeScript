"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// - Decorators
const myDecorator = () => {
    console.log('Decorator iniciado!');
    return (target, propertyKey, descriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log('Decorator finalizado!');
    };
};
class Test {
    testing() {
        console.log('Método de teste executado!');
    }
}
__decorate([
    myDecorator()
], Test.prototype, "testing", null);
const instanceTest = new Test();
instanceTest.testing();
// - Mult Decorators 
const decoratorX = () => (target, propertyKey, descriptor) => {
    console.log('X executado.');
};
const decoratorY = () => (target, propertyKey, escriptor) => {
    console.log('Y executado.');
};
const decoratorZ = () => (target, propertyKey, descriptor) => {
    console.log('Z executado.');
};
class MultDescorators {
    testing() {
        console.log('Função de teste executada!');
    }
}
__decorate([
    decoratorX(),
    decoratorY(),
    decoratorZ()
], MultDescorators.prototype, "testing", null);
// - decorators em classes
const userDec = (constructor) => {
    console.log(constructor);
    console.log(constructor.name);
    if (constructor.name === 'User') {
        console.log('Usuário criado!');
    }
};
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
User = __decorate([
    userDec
], User);
// const user1 = new User('eduardo braga', 19)
// - decorator de método
const handleGang = (value) => (target, propertyKey, descriptor) => {
    descriptor.enumerable = value;
};
class Student {
    constructor(name, gang) {
        this.gang = gang;
        this.name = name;
    }
    showGang() {
        console.log(`A sua turma é: ${this.gang}`);
    }
}
__decorate([
    handleGang(false)
], Student.prototype, "showGang", null);
const dudu = new Student('dudu', '9° A');
console.log(dudu);
// - Acessor Decorator
class Pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    get showName() {
        return this.name;
    }
    get showType() {
        return this.type;
    }
}
__decorate([
    handleGang(false)
], Pokemon.prototype, "showName", null);
__decorate([
    handleGang(true)
], Pokemon.prototype, "showType", null);
const charmander = new Pokemon('charmander', 'fire');
console.log(charmander);
// - property decorator
const formattedID = () => (target, propertyKey) => {
    let value;
    let getter = () => value;
    let setter = (newValue) => {
        value = newValue + Math.random().toString(36).slice(2);
    };
    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    });
};
class NewUser {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formattedID()
], NewUser.prototype, "id", void 0);
const cadu = new NewUser('5756');
console.log(cadu.id);
