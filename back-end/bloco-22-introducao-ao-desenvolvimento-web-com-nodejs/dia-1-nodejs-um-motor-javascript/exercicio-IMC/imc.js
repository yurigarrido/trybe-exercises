const readline = require('readline-sync')

const imc = () => {
  const peso = readline.questionInt('Qual é seu peso?')
  const altura = readline.questionFloat('Qual é seu sua altura em metros? Ex: 1.8')

  let situacao;
  const imc = (peso / altura ** 2);

  if ( imc <= 18.5) situacao = 'Abaixo do peso (magreza)';
  if ( imc > 18.5 && imc <= 24.99) situacao = 'Peso normal';
  if ( imc > 25.0 && imc <= 29.99) situacao = 'Acima do peso (sobrepeso) ';
  if ( imc > 30.0 && imc <= 34.99) situacao = 'Obesidade grau I ';
  if ( imc > 35.0 && imc <= 39.99) situacao = 'Obesidade grau II ';
  if ( imc > 40.0) situacao = 'Obesidade graus III e IV';

  const result = `Seu IMC é: ${imc} e sua situação é: ${situacao}`
  return result 
}

console.log(imc());