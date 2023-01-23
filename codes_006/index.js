"use strict";
//Objetos
const user = { name: 'Eduardo', surname: 'Braga' };
const newUser = (user) => ({
    name: user.name,
    surname: user.surname,
    age: user.age
});
const eduardo = newUser(Object.assign(Object.assign({}, user), { age: 19 }));
const jose = newUser({ name: 'josé', surname: 'Antonio', age: 87 });
console.log(jose, eduardo);
