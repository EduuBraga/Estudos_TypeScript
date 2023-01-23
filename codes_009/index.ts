//Literal types
let test: 'testando'
test = 'testando'

console.log(test)

const showNumber = (number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => {
  console.log(number)
}

showNumber(1)
showNumber(6)
// showNumber(11) //Erro


//non null assertion operator
const paragraph = document.querySelector('.paragraph')

console.log(paragraph!.textContent)