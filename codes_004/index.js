"use strict";
//numbers
const numbers = [2, 4, 6];
numbers.push(8);
// numbers.push('string') //Erro
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);
//String
const names = ['Eduardo', 'Maria'];
names.push('Antonio');
// names.push(2) //Erro
console.log(names);
//Outra sintaxe
const ages = [19, 19, 36, 38];
console.log(ages.reduce((acc, num) => acc + num, 0)); //112
