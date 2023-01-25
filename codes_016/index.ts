// - Campos em classes
class User {
  name!: string
  age!: number
}

const edu = new User()

console.log(edu)
edu.name = 'eduardo'
console.log(edu)

// - constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const dudu = new NewUser('dudu', 19)

console.log(dudu)


// - Props Readonly em Classes
class NewUserNew {
  name
  readonly _id = this.createID()

  constructor(name: string) {
    this.name = name
  }

  createID(): string {
    return Math.random().toString(36).slice(2)
  }
}

const cadu = new NewUserNew('cadu')

console.log(cadu)

// - Herança e super
class Home {
  name
  number

  constructor(name: string, number: number){
    this.name = name
    this.number = number
  }
}

const homeVoid = new Home('casa vazia', 999)

class ConvenientHome extends Home{
  nameConvenient
  mobile

  constructor(name: string, number: number, nameConvenient: string, mobile: number){
    super(name, number)
    this.nameConvenient = nameConvenient
    this.mobile = mobile
  }
}

const cozinha = new ConvenientHome('Minha casa', 1090, 'Cozinha', 4)


// - this; métodos; getters; setters;
class Car {
  name
  color
  brand
  whells

  constructor(name: string, color: string, brand: string, whells = 4){
    this.name = name
    this.color = color
    this.brand = brand
    this.whells = whells
  }

  showDetailsCar(){
    console.log(`O nome do carro é: ${this.name} e sua cor é: ${this.color}`)
  }

  get brandCar():string {
    return this.brand
  }

  set newWhells(number: number){
    if(number < 4)
      return

    this.whells = number

    console.log('Novas rodas inseridas com sucesso!')
  } 
}

const onix = new Car('onix', 'white', 'chevrolet')

onix.showDetailsCar()
console.log(onix.brandCar)

onix.newWhells = 6

console.log(onix)