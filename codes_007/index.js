"use strict";
// Union Type
const showBalance = (balance) => {
    console.log(`O saldo da conta é R$${balance}`);
};
showBalance(500);
showBalance('768');
const arrayUnion = [55, 'hello World!'];
//Validando union type
const showUserRole = (role) => {
    if (typeof role === 'boolean') {
        return 'Usuário não tem acesso!';
    }
    return `O papel do usuário é ${role}`;
};
console.log(showUserRole(false));
console.log(showUserRole('admin'));
