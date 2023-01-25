// - Callback tipado
const mult = (num1: number, num2: number) => num1 * num2

const sumAndMult = (
  func: (n1: number, n2: number) => number,
  num1: number,
  num2: number
) => {
  const sum: number = num1 + num2
  const mult: number = func(num1, num2)

  return `A soma entre ${num1} e ${num2} resultou em: ${sum} \ne a multiplicação em: ${mult}`
}

console.log(sumAndMult(mult, 15, 7))
console.log(sumAndMult(mult, 6, 7))


// - Generic function revisão
const getThreeItems = <T>(arr: T[]): T[] => {
  return arr.slice(0, 3)
}

console.log(getThreeItems([1, 2, 3, 4, 5, 6]))
console.log(getThreeItems(['teste1', 'test2', 'test3', 'test4']))
console.log(getThreeItems([true, null, {}, '']))


// - Tipo de argumento
const concatArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  const concat = [...arr1, ...arr2]

  return concat
}

console.log(concatArrays([1, 2, 3], [4, 5, 6]))
console.log(concatArrays<string | number | boolean>([1, 2, 3], ['teste', 'teste2', true]))


// - Readonly
interface User {
  name: string,
  age: number,
  email: string,
  password: string,
  readonly _id: string
}

const createId = () => Math.random().toString(36).slice(2)

const createUser = (
  name: string,
  age: number,
  email: string,
  password: string
) => {
  return { name, age, email, password, _id: createId() }
}

const user1: User = createUser('Eduardo', 19, 'dudu@email.com', '123')
const user2: User = createUser('Vivi', 19, 'vivi@email.com', '456')

// user1._id = '34884'


// - ReadonlyArray
let correctQuestions: ReadonlyArray<string> = ['A', 'B', 'C', 'D']

// correctQuestions = correctQuestions.reduce((item, acc) => item + acc)

// - Tuplas
type FiveItems = [string, string, string, string, string]

const chances: FiveItems = ['0', '1', '2', '3', '4']
