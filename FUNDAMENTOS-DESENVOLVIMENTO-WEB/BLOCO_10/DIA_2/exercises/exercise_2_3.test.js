const getUserName = require('./exercise_2_3')
// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.
describe('Verifica o resultado da função getUserName (Promisse)', () => {
  it('caso em que o usuário é encontrado.', () => {
    return getUserName(4).then(user => {
      expect(user).toEqual('Mark');
    });
  });

  it('caso em que o usuário não é encontrado.', () => {
    return getUserName(3).catch(error => {
      expect(error).toEqual({ error: 'User with 3 not found.' })
    });
  });
});

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.
describe('Verifica o resultado da função getUserName (Async/Await)', () => {
  it('caso em que o usuário é encontrado.', async () => {
    const name = await getUserName(5);
    expect(name).toEqual('Paul');
  });

  it('caso em que o usuário não é encontrado.', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    };
  });
});
