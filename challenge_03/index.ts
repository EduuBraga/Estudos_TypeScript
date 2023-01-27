/*
  01 - Crie um decorator que crie uma propriedade com a data exata que 
  a classe foi utiliza/instanciada.
*/

const createdDate = (created: Function): void => {
  created.prototype.createIt = new Date()
}

@createdDate
class Products {
  name
  qty
  price

  constructor(name: string, qty: number, price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }
}

const camisa = new Products('shirt', 6, 20)

console.log(camisa)

/*
  02 - Crie um method decorator para conferir se o post já foi postado.
*/

const checkIfUserAlreadyPosted = () => (
  target: Object,
  key: string | Symbol,
  descriptor: PropertyDescriptor
) => {
  const childFunc = descriptor.value

  descriptor.value = function (...args: any[]) {
    const [, alreadyPosted] = [...args]

    if (alreadyPosted) {
      console.log('Você já postou isso!')
      return null
    } else {
      childFunc.apply(this, args)
    }

    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserAlreadyPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`O usuário postou: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Olá pessoas...', newPost.alreadyPosted)
newPost.post('Falaa galeraa...', newPost.alreadyPosted)

/*
  03 - crie um property decorator para verificar o máximo de caracteres de uma
  propriedade.
*/

const maxCharacters = (limit: number) => (
  target: Object,
  propertyKey: string
) => {
  let value: string

  const getter = () => value

  const setter = (newValue: string) => {
    if(newValue.length > limit){
      console.log(`O valor deve ter no mínimo ${limit} dígitos.`)
      return 
    }else{
      console.log('tudo certo!')
      value = newValue
    }
  }

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  })
}

class Admin {
  @maxCharacters(12)
  username

  constructor(username: string){
    this.username = username
  }
}

const dudu = new Admin('edu12112213a')

