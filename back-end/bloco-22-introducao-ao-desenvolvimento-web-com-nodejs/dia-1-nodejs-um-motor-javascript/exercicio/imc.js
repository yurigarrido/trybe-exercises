const readline = require('readline-sync')

const imc = () => {
  const peso = readline.questionInt('Qual é seu peso?')
  const altura = readline.questionFloat('Qual é seu sua altura em metros? Ex: 1.8')
  return (peso / altura ** 2)
}

console.log(imc());