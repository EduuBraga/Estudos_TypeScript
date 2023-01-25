"use strict";
// - Callback tipado
const mult = (num1, num2) => num1 * num2;
const sumAndMult = (func, num1, num2) => {
    const sum = num1 + num2;
    const mult = func(num1, num2);
    return `A soma entre ${num1} e ${num2} resultou em: ${sum} \ne a multiplicação em: ${mult}`;
};
console.log(sumAndMult(mult, 15, 7));
console.log(sumAndMult(mult, 6, 7));
// - Generic function revisão
const getThreeItems = (arr) => {
    return arr.slice(0, 3);
};
console.log(getThreeItems([1, 2, 3, 4, 5, 6]));
console.log(getThreeItems(['teste1', 'test2', 'test3', 'test4']));
console.log(getThreeItems([true, null, {}, '']));
// - Tipo de argumento
const concatArrays = (arr1, arr2) => {
    const concat = [...arr1, ...arr2];
    return concat;
};
console.log(concatArrays([1, 2, 3], [4, 5, 6]));
console.log(concatArrays([1, 2, 3], ['teste', 'teste2', true]));
const createId = () => Math.random().toString(36).slice(2);
const createUser = (name, age, email, password) => {
    return { name, age, email, password, _id: createId() };
};
const user1 = createUser('Eduardo', 19, 'dudu@email.com', '123');
const user2 = createUser('Vivi', 19, 'vivi@email.com', '456');
// user1._id = '34884'
// - ReadonlyArray
let correctQuestions = ['A', 'B', 'C', 'D'];
const chances = ['0', '1', '2', '3', '4'];
