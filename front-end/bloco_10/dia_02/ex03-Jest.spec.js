const { users, findUserById, getUserName} = require('./ex03-Jest');

describe(' aqui refaço os testes do exercício anterior usando try/catch', () => {
  it('testa se encontra o user', async () => {
    const result = await getUserName(4);
    expect(result).toEqual('Mark')
  })
  it(' testa se encontra não o user ',  async () => {
    try{
      await findUserById(6);
    }catch (error){
      expect(error).toEqual({error : 'User with 6 not found.'})
    }
  })
})