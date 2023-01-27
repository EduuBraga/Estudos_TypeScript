// - factory
function log(prefix: string) {
  return (target: any) => {
    console.log(target)
    console.log(prefix)
  }
}

@log('awesome')
class Any { }


// - Class decorator
function setApiVersion(apiVersion: string) {
  return (target: any) => {
    return class extends target {
      version = apiVersion
    }
  }
}

@setApiVersion('1.0.0')
class API { }

console.log(new API())

function setApiVersionTwo(apiVersion: string) {
  return (target: Function) => {
    target.prototype.apiVersion = apiVersion
  }
}

@setApiVersionTwo('1.0.5')
class APITwo { }

console.log(new APITwo())

// - Property decorator
function maxNote(max: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val

    const setter = (value: number) => {
      if (value > max) {
        console.log(`A nota não pode ser maior que ${max}`)
        return
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      set: setter,
      get: getter
    })
  }
}

class Movie {
  name
  @maxNote(10)
  note

  constructor(name: string, note: number) {
    this.name = name
    this.note = note
  }
}

const GG = new Movie('Gente Grande', 11)
console.log(GG.note)

// - Method decorator
function delay(ms: number) {
  return (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)
    }
  }
}

class Greeter {
  person: string

  constructor(person: string) {
    this.person = person
  }

  @delay(1000)
  greeting() {
    console.log(`Hello, ${this.person}!`)
  }
}

const pessoinha = new Greeter('pessoinha')

pessoinha.greeting()