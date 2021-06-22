const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    } else if(newArr.contais(item)){
      throw new Error ('Não está retornando o array esperado')
    }
  }
  return newArr;
}
// implemente seus testes aqui
  //passo 01 e 02
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
  //passo 03
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
  // passo 04
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);