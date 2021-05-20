//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let nomeDaPeca = "bispo";

if (nomeDaPeca.toLocaleLowerCase()=== "bispo"){
  console.log("Se movimenta em diagonais.");
} 
else if(nomeDaPeca.toLocaleLowerCase()=== "cavalo"){
  console.log("Se movimenta em formato de L.");
}
else if(nomeDaPeca.toLocaleLowerCase()=== "peão"){
  console.log("Se movimenta para a frente.");
}
else if(nomeDaPeca.toLocaleLowerCase()=== "rei"){
  console.log("Se movimenta em qualquer direção, só uma casa.");
}
else if(nomeDaPeca.toLocaleLowerCase()=== "rainha"){
  console.log("Se movimenta para qualquer lado.");
}
else if(nomeDaPeca.toLocaleLowerCase()=== "torre"){
  console.log("Se movimenta em linha reta, sendo vertical ou horizontal.");
}