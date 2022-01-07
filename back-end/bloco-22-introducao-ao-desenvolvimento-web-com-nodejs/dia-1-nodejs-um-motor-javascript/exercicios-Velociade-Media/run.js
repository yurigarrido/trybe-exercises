const readline = require('readline-sync')

function velocidade () {
  const distancia = readline.questionInt("qual a distancia em metros?")
  const tempo = readline.questionInt("quanto tempo?")

  const velocidadeMedia = ( distancia / tempo)
  return (`Velocidade média: ${velocidadeMedia} m/s`)
}

console.log(velocidade());