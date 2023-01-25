"use strict";
// - Generics
const showData = (param) => `O dado é: ${param}`;
console.log(showData('Testando generic'));
console.log(showData(57));
console.log(showData(['teste']));
console.log(showData(''));
const showNameAndPriceProduct = (obj) => {
    return `O nome do produto é: ${obj.name} e seu preço é: ${obj.price}`;
};
const product1 = { name: 'shirt', price: 19.90, color: 'blue' };
const product2 = { name: 'short', price: 35.00, color: 'red' };
console.log(showNameAndPriceProduct(product1));
console.log(showNameAndPriceProduct(product2));
const mufasa = { specie: 'leon', pawsQty: 4, color: 'orange' };
const nami = { specie: 'cat', pawsQty: 4, color: 'white' };
console.log(mufasa);
console.log(nami);
// - Type Parameters
const getSomeKey = (obj, key) => {
    return `A chave "${String(key)}" tem como valor: ${obj[key]}`;
};
const edu = {
    name: 'Eduardo',
    email: 'eduardo@email.com'
};
console.log(getSomeKey(edu, 'email'));
const keyExistsInObj = (obj, key) => {
    let keyExists;
    obj[key]
        ? keyExists = `A chave ${String(key)} existe!`
        : keyExists = `A chave não existe`;
    return keyExists;
};
console.log(keyExistsInObj(edu, 'email'));
