"use strict";
/*
  01 - Crie um decorator que crie uma propriedade com a data exata que
  a classe foi utiliza/instanciada.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const createdDate = (created) => {
    created.prototype.createIt = new Date();
};
let Products = class Products {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
};
Products = __decorate([
    createdDate
], Products);
const camisa = new Products('shirt', 6, 20);
console.log(camisa);
/*
  02 - Crie um method decorator para conferir se o post já foi postado.
*/
const checkIfUserAlreadyPosted = () => (target, key, descriptor) => {
    const childFunc = descriptor.value;
    descriptor.value = function (...args) {
        const [, alreadyPosted] = [...args];
        if (alreadyPosted) {
            console.log('Você já postou isso!');
            return null;
        }
        else {
            childFunc.apply(this, args);
        }
        return descriptor;
    };
};
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`O usuário postou: ${content}`);
    }
}
__decorate([
    checkIfUserAlreadyPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Olá pessoas...', newPost.alreadyPosted);
newPost.post('Falaa galeraa...', newPost.alreadyPosted);
/*
  03 - crie um property decorator para verificar o máximo de caracteres de uma
  propriedade.
*/
const maxCharacters = (limit) => (target, propertyKey) => {
    let value;
    const getter = () => value;
    const setter = (newValue) => {
        if (newValue.length > limit) {
            console.log(`O valor deve ter no mínimo ${limit} dígitos.`);
            return;
        }
        else {
            console.log('tudo certo!');
            value = newValue;
        }
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    maxCharacters(12)
], Admin.prototype, "username", void 0);
const dudu = new Admin('edu12112213a');
