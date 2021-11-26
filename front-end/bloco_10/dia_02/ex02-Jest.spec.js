const { users , findUserById, getUserName} = require('./ex02-Jest');

describe('verifica o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.', () => {
  it(' testa quando o usuario é encontrado' , () => {
  expect.assertions(1);
    return getUserName(4).then( users => {
      expect(users).toEqual('Mark');
    })
  })
  it(' testa quando o usuario não é encontrado' , () => {
    expect.assertions(1);
      return getUserName(6).catch( error => {
        expect(error).toEqual({ error : 'User with 6 not found.'});
      })
    })
})