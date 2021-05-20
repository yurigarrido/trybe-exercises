//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

if (numero1 > numero2 && numero1 > numero3){
  console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3){
  console.log(numero2);
} else if( numero3 > numero1 && numero3 > numero2){
  console.log(numero3)
}