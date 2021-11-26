const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//passo 01
assert.strictEqual(sum(4, 5), 9);
//passo 02
assert.strictEqual(sum(0, 0), 0);
//passo 03 e 04
assert.strictEqual(sum(4, "5"),  );