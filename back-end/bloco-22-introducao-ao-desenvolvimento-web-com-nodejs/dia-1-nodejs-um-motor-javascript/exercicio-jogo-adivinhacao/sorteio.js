const readline = require('readline-sync')

function sorteio () {
  const numeroSorteado = Math.floor(Math.random() * 10)
  const numeroEscolhido = readline.questionInt("Escolha um numero de 0 a 10 :   ")
  let resultado;
   numeroSorteado === numeroEscolhido ? resultado = "Parabéns, número correto!" : resultado =`Opa, não foi dessa vez. O número era ${numeroSorteado}`;

   return resultado;
}

console.log(sorteio());