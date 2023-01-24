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
