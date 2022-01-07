const readline = require('readline-sync')

function logResultado (numero, resposta) {
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  return console.log('Parabéns, número correto!');

}

function playgame () {
  const numeroSorteado = Math.floor(Math.random() * 10)
  const numeroEscolhido = readline.questionInt("Escolha um numero de 0 a 10 :   ")
  logResultado(numeroSorteado, numeroEscolhido)

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novamente === 's') return playgame();
  console.log('OK, até a próxima!')
}

playgame();