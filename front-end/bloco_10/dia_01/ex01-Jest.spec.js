const summ = require('./ex01-Jest')

test('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(summ(4, 5)).toBe(9)
  });
test('Teste se o retorno de sum(0, 0) é ', () => {
  expect(summ(0, 0)).toBe(0)
  });
test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {summ(4, "5")}).toThrowError()
    });
test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => {summ(4, "5")}).toThrowError(new Error('parameters must be numbers'))
  });