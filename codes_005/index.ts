//Tipo any
const arrays: any = [[1], true, 'edaurdo', {age: 19}]

console.log(arrays)


//Tipo em parâmetros
const some = (n1: number, n2: number) => {
  console.log(n1 + n2)
}

some(5, 15)
// some(12, '5') //Erro


//Tipo de retorno
const greeting = (name: string): string => {
  return `Olá ${name}`
}

console.log(greeting('Eduardo'))