"use strict";
const sum = (n1, n2) => {
    const bothAreString = typeof n1 === 'string' && typeof n2 === 'string';
    const bothAreNumber = typeof n1 === 'number' && typeof n2 === 'number';
    if (bothAreString) {
        console.log(Number(n1) + Number(n2));
    }
    else if (bothAreNumber) {
        console.log(n1 + n2);
    }
    else {
        console.log('Valores inválidos!');
    }
};
sum('58', '89');
sum(49, 51);
sum(49, '90');
const getCalc = (arr, operation) => {
    const operations = {
        'sum': arr.reduce((num, acc) => num + acc, 0),
        'mult': arr.reduce((num, acc) => num * acc)
    };
    if (operation) {
        console.log(operations[operation]);
    }
    else {
        console.log('Por favor, insira uma operação.');
    }
};
getCalc([1, 2, 3], 'sum');
getCalc([1, 2, 3]);
getCalc([6, 5, 4], 'mult');
//instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const greetingUser = (user) => {
    if (user instanceof SuperUser) {
        console.log(`Olá senhor(a) ${user.name}, Deseja ver seus dados?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
};
const edu = new User('eduardo');
const vivian = new SuperUser('Vivian');
greetingUser(edu);
greetingUser(vivian);
// Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const tobby = new Dog('tobby', 'poodle');
const apolo = new Dog('apolo');
const showDetailsDog = (dog) => {
    const { name, breed } = dog;
    if ('breed' in dog) {
        console.log(`A raça do(a) ${name} é: ${breed}`);
    }
    else {
        console.log(`O ${name} é um SRD`);
    }
};
showDetailsDog(tobby);
showDetailsDog(apolo);
const users = {
    'eduardo': {
        name: 'Eduardo',
        lastname: 'Braga'
    },
    'vivian': {
        name: 'Vitória',
        lastname: 'Vivian'
    }
};
console.log('vivian' in users);
console.log('eduardo' in users);
console.log('maria' in users);
