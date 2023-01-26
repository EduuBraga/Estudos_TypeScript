/* - Visibilidade */

// - Public
class A {
  public note = 9.1
}

class B extends A { }

const AInstance = new A()
const BInstance = new B()

AInstance.note = 10
console.log(AInstance, BInstance)

BInstance.note = 5
console.log(AInstance, BInstance)


// - protected
class Z {
  protected n = 10

  protected showN() {
    console.log(this.n)
  }
}

class Y extends Z {
  showProtectedN() {
    this.showN()
  }
  set setN(num: number) {
    this.n = num
  }
}

const X = new Y()

// console.log(X.n) //Erro
// console.log(X.showN()) //Erro
X.showProtectedN()
console.log(X.setN = 15)
X.showProtectedN()


// - private
class PriveteClass {
  private name = 'Nome privado... shh'

  showName(){
    return this.name
  }

  private priveteMethod() {
    console.log('Método privado.')
  }

  showPriveteMethod(){
    this.priveteMethod()
  }
}

const instancePriveteClass = new PriveteClass()

// console.log(instancePriveteClass.name)
console.log(instancePriveteClass.showName())

// instancePriveteClass.privateMethod()
instancePriveteClass.showPriveteMethod()

// class ExtendsPrivateClass extends PriveteClass {
//   showNameTwo() {
//     return this.name
//   }
// }
