const { TestWatcher } = require('jest');
const myFizzBuzz = require('./ex04-Jest');

describe(' tome teste ', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toMatch("fizzbuzz")
  })
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(6)).toMatch("fizz")
  })
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(25)).toMatch("buzz")
  })
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(2)).toBe(2)
  })
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('olá')).toBe(false)
  })
})