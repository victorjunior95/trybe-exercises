// JEST - Testes Assíncronos

// Callbacks
test("Não deveria passar!", () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
  }, 500);
});

// Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase 'Deveria falhar!' sequer aparece no console. O Jest não espera o test acabar, gerando esse resultado falso-positivo.

test("Agora não vai passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});

// Outro exemplo
const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})

// Promisses
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);
// O teste desse código verificará se, ao chamar a função getListAnimals com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals .
describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco'); // passa no teste
      // expect(listDogs[0].name).toEqual('Agitado'); // não passa no teste
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });

  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});
// Step by step
/* 1. describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {

  });
}); */
// Add .then por ser uma promisse
/* 2. describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {

    });
  });
}); */
// Passa, mas com falso-positivo
/* 3. describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
}); */
// Pois se trocarmos 'Dorminhoco' por 'Bob' ainda passa
/* describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
}); */
// é necessário inserir um return antes da função e add a quantidade de expect esperadas por meio do comando expect.assertions(2).
/* 4. describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
}); */
// Agora o teste conseguiu identificar os erros, o que esperava Bob , mas recebeu o Dorminhoco e como o Jest apenas recebeu 1 assertion, mas eram esperados 2 , surge o segundo erro. Agora, desfaça as alterações para o teste voltar a funcionar.
/* 5. describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
}); */
// Essa promise possui dois casos: quando ela funciona, resolve, e no erro, reject . Como o resolve já foi testado, faltam apenas os testes do erro.
/* 6. describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
}); */

// Async/Await
// A diferença entre elas é o async, como existe uma promise a ser testada, é necessário o uso do await, para que o teste espere a finalização da promise e, em seguida, execute o teste remanescente.
describe('Quando o tipo do animal existe', () => {
  test('Testando com async/await', async () => {
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
// Abaixo está o código para quando ocorre o reject da promise. É necessário adicionar o bloco try/catch.
  test('Testando com async/await, testando o reject', async () => {
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    }
  });
});

// Matcher .resolves / .rejects
// com Promisse
describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
// O .resolves espera a promise ser resolvida. Caso a promise seja rejeitada, o teste automaticamente irá falhar.
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
// O .rejects espera a promise ser rejeitada. Caso a promise seja resolvida, o teste automaticamente irá falhar.
      return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});

// com Async/Await
describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});

// Setup e Teardown
// Este beforeEach e este afterEach serão aplicados a todos os testes
// O beforeEach é executado antes de cada teste, evitando que você tenha que repetir trechos de código, garantindo que o "ambiente" esteja preparado para os testes que precisarem.
beforeEach(() => {
  retrieveCitiesFromCache();
});

// O afterEach é especialmente útil para resetar configurações, dados, entre outras coisas.
afterEach(() => {
  resetCities();
});

it("should have only 1 city after remove Belo Horizonte", () => {
  removeCity("Belo Horizonte");
  expect(getCities().length).toBe(1);
});

it("should have the city of Belo Horizonte", () => {
  expect(isCity("Belo Horizonte")).toBeTruthy();
});

// O describe é utilizado para que executem (beforeEach e afterEach) apenas para um determinado conjunto de testes, ao invés de executá-los para todos os testes, pois frequentemente um trecho de código se aplica a alguns testes, mas não a outros.
describe('Requesting cities from api', () => {
  // Este beforeEach e este afterEach serão aplicados apenas aos testes
  // do bloco do describe
  beforeEach(() => {
    return requestCities();
  });

  afterEach(() => {
    resetCities();
  });

  it("should have 8 cities after request", () => {
    let cities = getCities();
    expect(cities.length).toBe(8);
  });

  it("should have the city of Belo Horizonte", () => {
    expect(isCity("Belo Horizonte")).toBeTruthy();
  });

  it("should have the city of Fortaleza", () => {
    expect(isCity("Fortaleza")).toBeTruthy();
  });
});
