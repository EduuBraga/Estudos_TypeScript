// - Importando e exportação
import { greetingImported, messageGreet, greetingImportedAdv } from "./greet.js"

greetingImported()

console.log(messageGreet)

greetingImportedAdv('dudu')


// - Alias
import { myName as name } from "./i.js"

console.log(name)


// - Import all
import * as myCharacter from './i.js'

console.log(myCharacter)


// - importando interfaces 
import { Human } from "./i.js"

class User implements Human {
  name
  age

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const joao = new User('joãozinho', 13)

console.log(joao)