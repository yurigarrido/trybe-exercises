let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente : 'Sim'
};

console.log( info.personagem, info2.personagem);
console.log( info.origem, info2.origem);
console.log( info.nota, info2.nota);
 
if( info.recorrente === 'Sim' && info2.recorrente ){
  console.log( 'Ambos recorrentes')
} else {
  console.log('Erro!')
}