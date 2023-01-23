//Alias
type strOrNum = string | number

const showId = (id: strOrNum) => {
  console.log(`o ID é: ${id}`)
}

showId(34)
showId('55')

const obj: { name: string, age: strOrNum, id: strOrNum } =
  { name: 'eduardo', age: '19', id: 77 }

console.log(obj)