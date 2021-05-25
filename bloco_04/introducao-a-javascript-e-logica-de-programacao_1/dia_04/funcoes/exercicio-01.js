let stringOri = ['arara'];

function comparaString (stringOri){
  let stringReversa = stringOri.split('').reverse().join('');
  if( stringOri === stringReversa ){
    return true;
  } else {
    return false;
  }
}
console.log(comparaString('ararad'));