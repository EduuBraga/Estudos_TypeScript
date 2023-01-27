"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// - Interface e property decorator
const formatNumber = (target, propertyKey) => {
    let val;
    const getter = () => val;
    const setter = (value) => {
        val = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    };
    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    });
};
class Product {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    showValue() {
        return `O valor do produto ${this.name} é: ${this.price}`;
    }
}
__decorate([
    formatNumber
], Product.prototype, "price", void 0);
const book = new Product('Código limpo', 23, 60);
console.log(book.showValue());
// - Abastract com method decorator
class UserAbstract {
}
const maxCharacter = (max) => (target, key, descriptor) => {
    let defaultFunction = target[key];
    descriptor.value = function (...args) {
        const [newPass] = args;
        if (newPass.length > max) {
            console.log(`A ${key} deve ter no mínimo ${max} caracteres.`);
            return;
        }
        else {
            defaultFunction.apply(this, args);
        }
        return descriptor;
    };
};
class User extends UserAbstract {
    constructor(n, age) {
        super();
        this.name = n;
        this.age = age;
    }
    showName() {
        return `Seu nome é: ${this.name}`;
    }
    newPassword(newPass) {
        console.log('Novo senha inserida com sucesso!');
    }
}
__decorate([
    maxCharacter(12)
], User.prototype, "newPassword", null);
const eduardo = new User('Eduardo Braga', 19);
eduardo.newPassword('eduardo1231223');
