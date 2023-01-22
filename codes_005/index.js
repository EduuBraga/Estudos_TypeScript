"use strict";
//Tipo any
const arrays = [[1], true, 'edaurdo', { age: 19 }];
console.log(arrays);
//Tipo em parâmetros
const some = (n1, n2) => {
    console.log(n1 + n2);
};
some(5, 15);
// some(12, '5') //Erro
//Tipo de retorno
const greeting = (name) => {
    return `Olá ${name}`;
};
console.log(greeting('Eduardo'));
