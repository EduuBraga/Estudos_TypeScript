// - Static
class StaticClass {
  static number = 89

  static methodStatic() {
    console.log(this.number)
  }
}

console.log(StaticClass.number)
StaticClass.methodStatic()


// - generic classes
class Items<T, U> {
  fisrt
  second

  constructor(fisrt: T, second: U) {
    this.fisrt = fisrt
    this.second = second
  }
}

const teclados = new Items('reddragon', 'blitzwolf')
const ages = new Items(19, 31)
const booleans = new Items(true, false)


// - parameter propeties
class ParameterPropeties {
  constructor(
    public name: string,
    private qty: number,
    private price: number
  ) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty(): string{
    return `A quantidade total de ${this.name} é: ${this.qty}`
  }

  get showPrice(): string{
    return `A ${this.name} está custando ${this.price}`
  }
}

const camisa = new ParameterPropeties('shirt', 7, 46.50)

console.log(camisa.name)
// console.log(camisa.qty)
// console.log(camisa.price)

console.log(camisa.showPrice)
console.log(camisa.showQty)


// - Classe expression
const myClass = class<T> {
  constructor(public name: T){
    this.name = name
  }
}

const instanceMyClass = new myClass('dudu')

console.log(instanceMyClass.name)


// - Abstract classe
abstract class ClassAbstract {
  abstract showName(): void
  abstract name: string
  abstract age: number
}

class ExtendsClassAbstract extends ClassAbstract {
  constructor(public name: string, public age : number){
    super()
    this.name = name
    this.age = age
  }

  showName(): void {
    console.log(this.name)
  }
}

const instanceClassAbstract = new ExtendsClassAbstract('edu', 19)

instanceClassAbstract.showName()