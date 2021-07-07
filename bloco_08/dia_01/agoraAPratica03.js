const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const ChecaGabarito = (rightAnswers, studentAnswers) => {
  let notaDoTeste = 0;
  let numeroDeAcertos = 0;
  let numeroDeErros = 0;
  for( index = 0; index < rightAnswers.length ; index += 1)
    if (studentAnswers[index] === rightAnswers[index]) { notaDoTeste+= 1, numeroDeAcertos+=1;}
      else {notaDoTeste-= 0.5, numeroDeErros +=1;}
    if(notaDoTeste < 0) { notaDoTeste = 0}
    return `Sua nota final é :${notaDoTeste}. 
Você acertou um total de ${numeroDeAcertos} questoes .
você errou ${numeroDeErros} questões.`;
}

console.log(ChecaGabarito(rightAnswers, studentAnswers));