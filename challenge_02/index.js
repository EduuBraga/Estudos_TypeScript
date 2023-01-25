"use strict";
/*
  01 - Estamos começando uma pequena comunidade de usuários. Por motivos de
  desempenho, decidimos armazenar todos os usuários diretamente no código.
  Dessa forma, podemos fornecer aos nossos desenvolvedores mais oportunidades
  de interação com o usuário.Todos os problemas relacionados ao Regulamento
  Geral sobre a Proteção de Dados serão resolvidos algum outro dia. Esta seria
  a base para nossos futuros experimentos durante esses exercícios. Dados os
  dados, defina a interface "User" e use-a de acordo.


  export type User = unknown;

  export const users: unknown[] = [
    {
      name: 'Wilker',
      age: 25,
      occupation: 'Backend developer'
    },
    {
      name: 'Bob',
      age: 23,
      occupation: 'Product Manager'
    }
  ];

  export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
  }

  console.log('Users:');
  users.forEach(logPerson);
*/
const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson({ name, age, role, occupation }) {
    let additionalInformation;
    role !== undefined
        ? additionalInformation = role
        : additionalInformation = occupation;
    console.log(` - ${name}, ${age}, ${additionalInformation}`);
}
persons.forEach(logPerson);
