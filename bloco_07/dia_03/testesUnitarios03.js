const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
  //passo 01
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
  //passo 02
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'erro');
  //passo 03
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 7), [1, 2, 3, 4], 'erro no passo 03');
  //passo 04
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 7), [1, 2, 3, 4], 'erro no passo 03');