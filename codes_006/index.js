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
//Props opcionais
const showNames = (name1, name2, name3) => {
    console.log(`Nome 1: ${name1}`);
    console.log(`Nome 2: ${name2}`);
    if (name3)
        console.log(`Nome 3: ${name3}`);
};
showNames('edu', 'dudu', 'cadu');
showNames('edu', 'dudu');
//Validando props opcinais
const advancedGreeting = (fisrtName, lastName) => {
    const fullName = `${fisrtName} ${lastName}`;
    if (lastName !== undefined) {
        return `Olá, ${fullName}, tudo bom?`;
    }
    return `Olá, ${fisrtName}, tudo bom?`;
};
console.log(advancedGreeting('Eduardo', 'Braga'));
console.log(advancedGreeting('Vivian'));
