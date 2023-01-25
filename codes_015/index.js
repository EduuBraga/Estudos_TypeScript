"use strict";
const showCharName = (obj, key) => {
    return `${obj[key]}`;
};
const myChar = {
    name: 'Eduardo Braga',
    age: 19,
    email: 'eduardo.braga467@gmail.com'
};
console.log(showCharName(myChar, 'name'));
// - typeof type operator
const userName = 'Eduardo';
const userName2 = 'Yasmim';
const userName3 = 'Vivian';
const userName4 = 'Chalme';
const showKg = (kg) => `O caminhão pesa: ${kg}kg`;
const myTruck = { km: 10000, kg: 5000, description: 'meu caminhão' };
const mySecondTruck = { km: 5000, kg: 1300 };
console.log(showKg(myTruck.kg));
console.log(showKg(mySecondTruck.kg));
const showKgTwo = (kg) => `O caminhão pesa: ${kg}kg`;
const myFisrtTruck = { km: 10000, kg: 5000, description: 'meu caminhão' };
console.log(showKg(myFisrtTruck.kg));
const teste1 = 'teste numero 1';
const Y = 'teste 1';
const T = 'teste 2';
// const U: ZX = 'teste 3' //Erro
