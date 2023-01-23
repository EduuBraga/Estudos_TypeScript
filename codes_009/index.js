"use strict";
//Literal types
let test;
test = 'testando';
console.log(test);
const showNumber = (number) => {
    console.log(number);
};
showNumber(1);
showNumber(6);
// showNumber(11) //Erro
//non null assertion operator
const paragraph = document.querySelector('.paragraph');
console.log(paragraph.textContent);
