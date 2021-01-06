const getRepos = require('./exercise_4');
// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
it('Verifica se um determinado repositório se encontra na lista de repositórios de um usuário', () => {
    const url = 'https://api.github.com/users/tryber/repos';
    return getRepos(url).then(data => {
      expect(data).toContain('sd-01-week4-5-project-todo-list');
      expect(data).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
