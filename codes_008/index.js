"use strict";
const showId = (id) => {
    console.log(`o ID é: ${id}`);
};
showId(34);
showId('55');
const obj = { name: 'eduardo', age: '19', id: 77 };
console.log(obj);
const showUser = (user) => {
    console.log(`O usuário ${user.name} tem ${user.age} anos.`);
};
const userEduardo = {
    name: 'Eduardo',
    age: 19,
    id: 776
};
showUser(userEduardo);
