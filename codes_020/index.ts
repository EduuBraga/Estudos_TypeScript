// - Decorators
const myDecorator = () => {
  console.log('Decorator iniciado!')

  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void => {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    console.log('Decorator finalizado!')
  }
}

class Test {
  @myDecorator()
  testing(): void {
    console.log('Método de teste executado!')
  }
}

const instanceTest = new Test()

instanceTest.testing()


// - Mult Decorators 
const decoratorX = () => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void => {
  console.log('X executado.')
}

const decoratorY = () => (
  target: any,
  propertyKey: string,
  escriptor: PropertyDescriptor
): void => {
  console.log('Y executado.')
}

const decoratorZ = () => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  console.log('Z executado.')
}

class MultDescorators {
  @decoratorX()
  @decoratorY()
  @decoratorZ()
  testing() {
    console.log('Função de teste executada!')
  }
}


// - decorators em classes
const userDec = (constructor: Function) => {
  console.log(constructor)
  console.log(constructor.name)

  if (constructor.name === 'User') {
    console.log('Usuário criado!')
  }
}

@userDec
class User {
  public name
  public age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// const user1 = new User('eduardo braga', 19)


// - decorator de método
const handleGang = (value: boolean) => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  descriptor.enumerable = value
}

class Student {
  name
  gang

  constructor(name: string, gang: string) {
    this.gang = gang
    this.name = name
  }

  @handleGang(false)
  showGang() {
    console.log(`A sua turma é: ${this.gang}`)
  }
}

const dudu = new Student('dudu', '9° A')

console.log(dudu)


// - Acessor Decorator
class Pokemon {
  name
  type

  constructor(name: string, type: string) {
    this.name = name
    this.type = type
  }

  @handleGang(false)
  get showName() {
    return this.name
  }

  @handleGang(true)
  get showType() {
    return this.type
  }
}

const charmander = new Pokemon('charmander', 'fire')

console.log(charmander)


// - property decorator
const formattedID = () => (
  target: Object,
  propertyKey: string
): void => {
  let value: string

  let getter = (): string => value

  let setter = (newValue: string): void => {
    value = newValue + Math.random().toString(36).slice(2)
  }

  Object.defineProperty(target, propertyKey, {
    set: setter,
    get: getter
  })
}

class NewUser {
  @formattedID()
  id

  constructor(id: string) {
    this.id = id
  }
}

const cadu = new NewUser('5756')

console.log(cadu.id)