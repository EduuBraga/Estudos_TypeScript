// - Generics
const showData = <T>(param: T): string => `O dado é: ${param}`

console.log(showData('Testando generic'))
console.log(showData(57))
console.log(showData(['teste']))
console.log(showData(''))


// - constrain
type nameAndPrice = { name: string, price: number }

const showNameAndPriceProduct = <T extends nameAndPrice>(obj: T) => {
  return `O nome do produto é: ${obj.name} e seu preço é: ${obj.price}`
}

const product1 = { name: 'shirt', price: 19.90, color: 'blue' }
const product2 = { name: 'short', price: 35.00, color: 'red' }

console.log(showNameAndPriceProduct(product1))
console.log(showNameAndPriceProduct(product2))


// - generics com interface 
interface Animals<T, U> {
  specie: string,
  pawsQty: T,
  color: U
}

type Mammals = Animals<number, string>
type Carnivores = Animals<number, string>

const mufasa: Carnivores = { specie: 'leon', pawsQty: 4, color: 'orange' }
const nami: Mammals = { specie: 'cat', pawsQty: 4, color: 'white' }

console.log(mufasa)
console.log(nami)


// - Type Parameters
const getSomeKey = <T, K extends keyof T>(obj: T, key: K): string => {
  return `A chave "${String(key)}" tem como valor: ${obj[key]}`
}

const edu = {
  name: 'Eduardo',
  email: 'eduardo@email.com'
}

console.log(getSomeKey(edu, 'email'))

const keyExistsInObj = <T, K extends keyof T>(obj: T, key: K) => {
  let keyExists: string

  obj[key]
    ? keyExists = `A chave ${String(key)} existe!`
    : keyExists = `A chave não existe`

  return keyExists
}

console.log(keyExistsInObj(edu, 'email'))


