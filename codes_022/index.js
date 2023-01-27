"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// - factory
function log(prefix) {
    return (target) => {
        console.log(target);
        console.log(prefix);
    };
}
let Any = class Any {
};
Any = __decorate([
    log('awesome')
], Any);
// - Class decorator
function setApiVersion(apiVersion) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
let API = class API {
};
API = __decorate([
    setApiVersion('1.0.0')
], API);
console.log(new API());
function setApiVersionTwo(apiVersion) {
    return (target) => {
        target.prototype.apiVersion = apiVersion;
    };
}
let APITwo = class APITwo {
};
APITwo = __decorate([
    setApiVersionTwo('1.0.5')
], APITwo);
console.log(new APITwo());
// - Property decorator
function maxNote(max) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value > max) {
                console.log(`A nota não pode ser maior que ${max}`);
                return;
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });
    };
}
class Movie {
    constructor(name, note) {
        this.name = name;
        this.note = note;
    }
}
__decorate([
    maxNote(10)
], Movie.prototype, "note", void 0);
const GG = new Movie('Gente Grande', 11);
console.log(GG.note);
// - Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
        };
    };
}
class Greeter {
    constructor(person) {
        this.person = person;
    }
    greeting() {
        console.log(`Hello, ${this.person}!`);
    }
}
__decorate([
    delay(1000)
], Greeter.prototype, "greeting", null);
const pessoinha = new Greeter('pessoinha');
pessoinha.greeting();
