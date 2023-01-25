"use strict";
const showProductDetails = ({ name, price, isAvailable }) => {
    console.log(`O produto ${name} está custando R$${price}`);
    isAvailable
        ? console.log(`${name} está disponível`)
        : console.log(`${name} não está disponível`);
};
const shirt = {
    name: 'camisa',
    price: 55.50,
    isAvailable: true
};
const pants = {
    name: 'calça',
    price: 99,
    isAvailable: false
};
showProductDetails(shirt);
showProductDetails(pants);
const showUserEmail = (user) => {
    console.log(`Este é o seu email: ${user.email}`);
    user.role
        ? console.log(`Você tem como função: ${user.role}`)
        : console.log(`Você não tem função`);
};
const u1 = { email: 'dudu@email.com', password: '123', role: 'admin' };
const u2 = { email: 'vivi@email.com', password: '456' };
showUserEmail(u1);
showUserEmail(u2);
const fusca = { brand: 'VW', whells: 4 };
console.log(fusca);
const tobby = { name: 'Tobby', race: 'poodle' };
const luna = { name: 'luna' };
console.log(tobby, luna);
const eduardo = { name: 'Eduardo Braga', age: 19 };
const superMan = {
    name: 'Clark',
    age: 38,
    superPowers: ['super-força', 'velocidade', 'raio-laser']
};
console.log(superMan);
console.log(superMan.superPowers);
const zoro = {
    name: 'zoro',
    gun: 'katana',
    type: 'sword'
};
console.log(zoro);
// - ReadonlyArray
let pets = [
    'lola',
    'luna',
    'lua',
    'tobby',
    'tata',
    'leo',
    'paçoca',
    'piriquito',
    'nami'
];
// pets.forEach((pet, index) => {
//   const maleOrFamale = pet.lastIndexOf('a') + 1  === pet.length 
//   console.log(`${pet} foi o ${++index}° a ser ${maleOrFamale ? 'adotada' : 'adotado'}`)
// })
pets = pets.map((pet, index) => `${pet} foi o ${++index} a ser adotado`);
console.log(pets);
const myFiveNumbers = [1, 2, 3, 4, 5];
const user1 = ['Eduardo', 19];
user1[0] = 'Dudu';
user1[1] = 31;
// user[2] = 'olá' //ERRO
// user[0] = 19 //ERRO
// user[1] = 'teste' //ERRO
