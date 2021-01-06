// Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('1', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('2', () => console.log('2 - test'));
});

// test 1
//  -> '1 - beforeEach'
//  '1'
//     -> '1 - test'
//  -> '1- afterEach'

// -> '1 - beforeEach'

// test 2
// 'Scoped / Nested Block'
//  -> '2 - beforeEach'
//  '2'
//     -> '2 - test'
//  -> '2- afterEach'

// -> '1 - afterEach'
