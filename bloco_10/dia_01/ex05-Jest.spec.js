const analitcObject = require('./ex05-Jest');
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};


describe('tome test', () => {
  test('compara se os dois objetos passados como parametros são iguais', () => {
    expect(analitcObject(obj2, obj3)).toBe(false)
  })
})