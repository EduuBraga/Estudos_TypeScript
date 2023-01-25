// - keyof type operator
interface Character { name: string, age: number, email: string }
type C = keyof Character

const showCharName = (obj: Character, key: C): string => {
  return `${obj[key]}`
}

const myChar: Character = {
  name: 'Eduardo Braga',
  age: 19,
  email: 'eduardo.braga467@gmail.com'
}

console.log(showCharName(myChar, 'name'))


// - typeof type operator
const userName: string = 'Eduardo'
const userName2: typeof userName = 'Yasmim'
const userName3: typeof userName = 'Vivian'

type user = typeof userName

const userName4: user = 'Chalme'


// - indexed access types
interface Truck { km: number, kg: number, description: string }
type Kg = Truck['kg']

const showKg = (kg: Kg) => `O caminhão pesa: ${kg}kg`

const myTruck: Truck = { km: 10000, kg: 5000, description: 'meu caminhão' }
const mySecondTruck = { km: 5000, kg: 1300 }

console.log(showKg(myTruck.kg))
console.log(showKg(mySecondTruck.kg))


// - keyof type operator
interface NewTruck { km: number, kg: number, description: string }
type P = keyof NewTruck

const showKgTwo = (kg: P) => `O caminhão pesa: ${kg}kg`

const myFisrtTruck: NewTruck = { km: 10000, kg: 5000, description: 'meu caminhão' }

console.log(showKg(myFisrtTruck.kg))


// - conditional type
interface A { }
interface B extends A { }
interface D {
  showName(): string
}

type MyType = B extends A ? string : number
type MyType2 = D extends {showName(): string} ? object : Array<string>


// - template literals type
type test = 'teste'
type customTest = `${test} numero 1`

const teste1: customTest = 'teste numero 1'
// const teste4: customTest = 'teste numero 4' //Erro

type Z = 'teste 1'
type X = 'teste 2'

type ZX = Z | X

const Y: ZX = 'teste 1'
const T: ZX = 'teste 2'
// const U: ZX = 'teste 3' //Erro