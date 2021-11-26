const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
//console.log(myFizzBuzz('7'));
// implemente seus testes aqui
  //passo01
assert.deepStrictEqual(myFizzBuzz(15),'fizzbuzz', 'error no passo 1');
  //passo02
assert.deepStrictEqual(myFizzBuzz(3),'fizz', 'error no passo 2');
  //passo03
assert.deepStrictEqual(myFizzBuzz(5),'buzz', 'error no passo 3');
  //passo04
assert.deepStrictEqual(myFizzBuzz(2),2, 'error no passo 4');
  //passo05
assert.strictEqual(myFizzBuzz('7'),false, 'erro no passo 5')