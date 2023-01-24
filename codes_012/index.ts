// - Interface
interface Product {
  name: string,
  price: number,
  isAvailable: boolean
}

const showProductDetails = ({ name, price, isAvailable }: Product) => {
  console.log(`O produto ${name} está custando R$${price}`)

  isAvailable
    ? console.log(`${name} está disponível`)
    : console.log(`${name} não está disponível`)
}

const shirt: Product = {
  name: 'camisa',
  price: 55.50,
  isAvailable: true
}

const pants: Product = {
  name: 'calça',
  price: 99,
  isAvailable: false
}

showProductDetails(shirt)
showProductDetails(pants)


// - interface com props opcionais
interface User {
  email: string,
  password: string,
  role?: string
}

const showUserEmail = (user: User) => {
  console.log(`Este é o seu email: ${user.email}`)

  user.role
    ? console.log(`Você tem como função: ${user.role}`)
    : console.log(`Você não tem função`)
}

const u1: User = { email: 'dudu@email.com', password: '123', role: 'admin' }
const u2: User = { email: 'vivi@email.com', password: '456' }

showUserEmail(u1)
showUserEmail(u2)


// - readonly
interface Car { brand: string, readonly whells: number }

const fusca: Car = { brand: 'VW', whells: 4 }

console.log(fusca)
// console.log(fusca.whells = 5) //ERRO


// - index signature
interface Dog { [index: string]: string, name: string }

const tobby: Dog = { name: 'Tobby', race: 'poodle' }
const luna: Dog = {name: 'luna'}

console.log(tobby, luna)