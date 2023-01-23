//Objetos
const user: {name: string, surname: string} = {name: 'Eduardo', surname: 'Braga'}

const newUser = (user: {name: string, surname: string, age: number}) => ({
  name: user.name,
  surname: user.surname,
  age: user.age
})

const eduardo = newUser({...user, age: 19})
const jose = newUser({name: 'josé', surname: 'Antonio', age: 87})

console.log(jose, eduardo)
