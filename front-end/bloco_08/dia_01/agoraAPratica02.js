const numberRandom = () =>{ 
  const number = Math.random() * 5;
 return Math.ceil(number);
}

const numberSelected = () =>{
  const number = Math.random() * 5;
  return Math.ceil(number);
}

const sorteio= (numberRandom, numberSelected) =>{
  if(numberSelected === numberRandom) { return `O numero sorteado foi: ${numberRandom}, e você escolheu o numero ${numberSelected}
    Parabens, você ganhou! `}
    return `o numero sorteado foi: ${numberRandom}, e você escolheu o numero ${numberSelected}
    Tente novamente!`;
    
}
console.log(sorteio(numberRandom(),numberSelected()));