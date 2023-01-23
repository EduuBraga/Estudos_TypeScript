//Alias
type strOrNum = string | number

const showId = (id: strOrNum) => {
  console.log(`o ID é: ${id}`)
}

showId(34)
showId('55')

const obj: { name: string, age: strOrNum, id: strOrNum } =
  { name: 'eduardo', age: '19', id: 77 }

console.log(obj)


//interface
interface User {
  name: string,
  age: number,
  id: string | number
}

const showUser = (user: User) => {
  console.log(`O usuário ${user.name} tem ${user.age} anos.`)
}

const userEduardo: User = {
  name: 'Eduardo',
  age: 19,
  id: 776
}

showUser(userEduardo)


// Interface X alias
/* Diferença: A interface pode ser modificada, já o alias não. */
//Interface
interface Person { name: string }
interface Person { age: number }

const edu: Person = {name: 'edu', age: 19}

//Alias
type PersonType = { name: string }
// type PersonType = { age: string }

const vivi: PersonType = {name: 'Vivi'}