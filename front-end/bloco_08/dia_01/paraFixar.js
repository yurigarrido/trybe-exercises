/* Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. */

const wakeUp = () => console.log('Acordando!!');
const goToCoff = () => console.log('Bora tomar café!!');
const letsSleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();
doingThings(goToCoff);