let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma =0;

for( index = 0; index < numbers.length; index +=1 ){
  soma += numbers[index];
}console.log(soma);
let media = soma / numbers.length;
console.log(media);

if(media > 20){
  console.log("Maior que 20")
} else{
  console.log("Menor ou igual a 20")}