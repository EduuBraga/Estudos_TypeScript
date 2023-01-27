// - Interface e property decorator
const formatNumber = (
  target: Object,
  propertyKey: string
) => {
  let val: string

  const getter = (): string => val

  const setter = (value: number) => {
    val = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    })
  }

  Object.defineProperty(target, propertyKey, {
    set: setter,
    get: getter
  })
}

interface Products {
  showValue(): string,
  name: string,
  price: number,
  qty: number
}

class Product implements Products {
  @formatNumber
  price
  name
  qty

  constructor(name: string, qty: number, price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  showValue(): string {
    return `O valor do produto ${this.name} é: ${this.price}`
  }
}

const book = new Product('Código limpo', 23, 60)

console.log(book.showValue())


// - Abastract com method decorator
abstract class UserAbstract {
  abstract name: string
  abstract age: number
  abstract showName(): string
  abstract newPassword(newPass: string): void
}

const maxCharacter = (max: number) => (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) => {
  let defaultFunction = target[key]

  descriptor.value = function (...args: any[]) {
    const [newPass] = args

    if (newPass.length > max) {
      console.log(`A ${key} deve ter no mínimo ${max} caracteres.`)
      return
    } else {
      defaultFunction.apply(this, args)
    }

    return descriptor
  }
}

class User extends UserAbstract {
  name: string
  age: number

  constructor(n: string, age: number) {
    super()
    this.name = n
    this.age = age
  }

  showName(): string {
    return `Seu nome é: ${this.name}`
  }

  @maxCharacter(12)
  newPassword(newPass: string): void {
    console.log('Novo senha inserida com sucesso!')
  }
}

const eduardo = new User('Eduardo Braga', 19)

eduardo.newPassword('eduardo1231223')