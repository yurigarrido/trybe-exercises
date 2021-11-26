const uppercase = require('./ex01-Jest');

describe('aqui vai o exercício 01', () => {
  it(' testa se a string fica em upercase', done => {
    uppercase(' aqui vai o texto', (result) => {
      expect(result).toEqual(' AQUI VAI O TEXTO');
      done()
    })
  })
})
