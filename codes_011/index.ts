// - Void
const withoutReturn = (): void => {
  console.log('Está função não tem retorno!')
}

withoutReturn()


// - Callback como argumento
type callback = (name: string) => string

const greeting = (name: string): string => `Olá ${name}`

const preGreenting = (func: callback, userName: string): void => {
  console.log('Carregando func...')
  const salute = func(userName)
  console.log(salute)
}

preGreenting(greeting, 'Eduardo')
preGreenting(greeting, 'Vivian')


// - Generic function
const getFisrtItem = <T>(arr: T[]): T => arr[0]

console.log(getFisrtItem([0, 5, 10]))
console.log(getFisrtItem(['a', 'b', 'c']))
// console.log(getFisrtItem(777))

const mergeObjs = <U, T>(obj1: T, obj2: U) => ({
  ...obj1,
  ...obj2
})

console.log(mergeObjs({ name: 'eduardo' }, { age: 19, job: 'student' }))


// - Constraint em generic functions
const biggestNumber = <T extends number | string>(a: T, b: T) => {
  let biggest: T

  +a > +b ? biggest = a : biggest = b

  return biggest
}

console.log(biggestNumber(5, 7))
// console.log(biggestNumber(5, '10'))
console.log(biggestNumber('5', '9'))


// - Especificar tipo de argumento
const mergeArrays = <T>(arr1: T[], arr2: T[]) => arr1.concat(arr2)

console.log(mergeArrays([1, 3, 5], [7, 9, 11]))
console.log(mergeArrays(['cadu'], ['vivi']))
console.log(mergeArrays<number | string>([1, 3, 5], ['eduardo']))


// - Parâmetros opcionais
const modernGreeting = (name: string, greet?: string) =>
  greet ? `Olá ${greet} ${name}, Tudo bem?` : `Olá ${name}, Tudo bem?`

console.log(modernGreeting('Eduardo'))
console.log(modernGreeting('Carlos', 'Dr.'))


// - Unknown
const doSomething = (a: unknown) => {
  if (Array.isArray(a)) {
    console.log(a[0])
  } else if (typeof a === 'object') {
    console.log(a)
  } else if (typeof a === 'number') {
    console.log(a + a)
  }
}

doSomething([0, 0, 0])
doSomething({ name: 'eduardo' })
doSomething(5)


// - Rest operator
interface User {
  name: string,
  age: number
}

const user1: User = {
  name: 'Eduardo',
  age: 19
}

const user2: User = {
  name: 'Vivian',
  age: 19
}

const users: object[] = [
  { ...user1 },
  { ...user2 }
]

console.log(users)

const sumAll = (...all: number[]): number =>
  all.reduce((item, acc) => item + acc, 0)

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))


// - Destructuring Object
type ProductDetails = { name: string, price: number }

const showProductDetails = ({ name, price }: ProductDetails) => {
  return `O produto ${name} vale: R$${price}`
}

const computer = {name: 'PC gamer', price: 1290}

console.log(showProductDetails(computer))