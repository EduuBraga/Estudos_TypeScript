"use strict";
// - Void
const withoutReturn = () => {
    console.log('Está função não tem retorno!');
};
withoutReturn();
const greeting = (name) => `Olá ${name}`;
const preGreenting = (func, userName) => {
    console.log('Carregando func...');
    const salute = func(userName);
    console.log(salute);
};
preGreenting(greeting, 'Eduardo');
preGreenting(greeting, 'Vivian');
// - Generic function
const getFisrtItem = (arr) => arr[0];
console.log(getFisrtItem([0, 5, 10]));
console.log(getFisrtItem(['a', 'b', 'c']));
// console.log(getFisrtItem(777))
const mergeObjs = (obj1, obj2) => (Object.assign(Object.assign({}, obj1), obj2));
console.log(mergeObjs({ name: 'eduardo' }, { age: 19, job: 'student' }));
// - Constraint em generic functions
const biggestNumber = (a, b) => {
    let biggest;
    +a > +b ? biggest = a : biggest = b;
    return biggest;
};
console.log(biggestNumber(5, 7));
// console.log(biggestNumber(5, '10'))
console.log(biggestNumber('5', '9'));
// - Especificar tipo de argumento
const mergeArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(mergeArrays([1, 3, 5], [7, 9, 11]));
console.log(mergeArrays(['cadu'], ['vivi']));
console.log(mergeArrays([1, 3, 5], ['eduardo']));
// - Parâmetros opcionais
const modernGreeting = (name, greet) => greet ? `Olá ${greet} ${name}, Tudo bem?` : `Olá ${name}, Tudo bem?`;
console.log(modernGreeting('Eduardo'));
console.log(modernGreeting('Carlos', 'Dr.'));
// - Unknown
const doSomething = (a) => {
    if (Array.isArray(a)) {
        console.log(a[0]);
    }
    else if (typeof a === 'object') {
        console.log(a);
    }
    else if (typeof a === 'number') {
        console.log(a + a);
    }
};
doSomething([0, 0, 0]);
doSomething({ name: 'eduardo' });
doSomething(5);
const user1 = {
    name: 'Eduardo',
    age: 19
};
const user2 = {
    name: 'Vivian',
    age: 19
};
const users = [
    Object.assign({}, user1),
    Object.assign({}, user2)
];
console.log(users);
const sumAll = (...all) => all.reduce((item, acc) => item + acc, 0);
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
const showProductDetails = ({ name, price }) => {
    return `O produto ${name} vale: R$${price}`;
};
const computer = { name: 'PC gamer', price: 1290 };
console.log(showProductDetails(computer));
