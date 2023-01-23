// Union Type
const showBalance = (balance: string | number) => {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(500)
showBalance('768')

const arrayUnion: Array<string | number> = [55, 'hello World!']


//Validando union type
const showUserRole = (role: boolean | string) => {
  if(typeof role === 'boolean'){
    return 'Usuário não tem acesso!'
  }

  return `O papel do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('admin'))