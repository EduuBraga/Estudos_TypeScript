"use strict";
/*
  01 - Como podemos rodar isso em um arquivo .ts sem causar erros?

  let employee = {};
  employee.code = 10;
  employee.name = "John";
*/
let employee = {
    code: 10,
    name: 'John'
};
/*
  02 - Como podemos melhorar o esse código usando TS?

  let pessoa1 = {};
  pessoa1.nome = "maria";
  pessoa1.idade = 29;
  pessoa1.profissao = "atriz"

  let pessoa2 = {}
  pessoa2.nome = "roberto";
  pessoa2.idade = 19;
  pessoa2.profissao = "Padeiro";

  let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
  };

  let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
  }
*/
const createUser = (name, age, profession) => ({ name, age, profession });
const person1 = createUser('maria', 29, 'atriz');
const person2 = createUser('roberto', 19, 'Padeiro');
const person3 = createUser('laura', 32, 'atriz');
const person4 = createUser('carlos', 19, 'Padeiro');
/*
  03 - O código abaixo tem alguns erros e não funciona como deveria. Você
  pode identificar quais são e corrigi-los em um arquivo TS?

  let botaoAtualizar = document.getElementById('atualizar-saldo');
  let botaoLimpar = document.getElementById('limpar-saldo');
  let sum = document.getElementById('sum');
  let campoSaldo = document.getElementById('campo-saldo');

  campoSaldo.innerHTML = 0

  function somarAoSaldo(sum) {
      campoSaldo.innerHTML += sum;
  }

  function limparSaldo() {
      campoSaldo.innerHTML = '';
  }

  botaoAtualizar.addEventListener('click', function () {
      somarAoSaldo(sum.value);
  });

  botaoLimpar.addEventListener('click', function () {
      limparSaldo();
  });

  <h4>Valor a ser adicionado: <input id="sum"> </h4>
  <button id="atualizar-saldo">Atualizar saldo</button>
  <button id="limpar-saldo">Limpar seu saldo</button>
  <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
*/
let buttonUpdate = document.querySelector('#atualizar-saldo');
let buttonClear = document.querySelector('#limpar-saldo');
let sum = document.querySelector('#soma');
let balanceField = document.querySelector('#campo-saldo');
balanceField.textContent = '0';
const addToTheBalance = (sum) => {
    balanceField.textContent = `${sum}`;
};
const clearBalence = () => {
    balanceField.textContent = '0';
};
buttonUpdate.addEventListener('click', _ => addToTheBalance(sum.value));
buttonClear.addEventListener('click', _ => clearBalence());
