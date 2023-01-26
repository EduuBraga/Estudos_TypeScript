"use strict";
// - Static
class StaticClass {
    static methodStatic() {
        console.log(this.number);
    }
}
StaticClass.number = 89;
console.log(StaticClass.number);
StaticClass.methodStatic();
// - generic classes
class Items {
    constructor(fisrt, second) {
        this.fisrt = fisrt;
        this.second = second;
    }
}
const teclados = new Items('reddragon', 'blitzwolf');
const ages = new Items(19, 31);
const booleans = new Items(true, false);
// - parameter propeties
class ParameterPropeties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `A quantidade total de ${this.name} é: ${this.qty}`;
    }
    get showPrice() {
        return `A ${this.name} está custando ${this.price}`;
    }
}
const camisa = new ParameterPropeties('shirt', 7, 46.50);
console.log(camisa.name);
// console.log(camisa.qty)
// console.log(camisa.price)
console.log(camisa.showPrice);
console.log(camisa.showQty);
// - Classe expression
const myClass = class {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
};
const instanceMyClass = new myClass('dudu');
console.log(instanceMyClass.name);
// - Abstract classe
class ClassAbstract {
}
class ExtendsClassAbstract extends ClassAbstract {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}
const instanceClassAbstract = new ExtendsClassAbstract('edu', 19);
instanceClassAbstract.showName();
