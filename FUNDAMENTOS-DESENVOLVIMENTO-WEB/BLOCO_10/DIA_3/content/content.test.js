// 1. Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100 . A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:
let randomNumber = () => Math.floor(Math.random() * 100) // Lógica de gerar o número

let isDivisible = (number) => (randomNumber() % number) === 0;

// Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible() .
// 2. Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true .
test('testando se randomNumber retorna e isDivisible retorna true', () => {
  randomNumber = jest.fn().mockReturnValueOnce(14);

  expect(isDivisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalled(); // teste que verifica que a função randomNumber() é chamada (dentro da isDivisible[linha 11]).
})
// 3. Simule ( mocke ) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.
test('simulando que randomNumber retorna dois valores e um terceiro default. Depois chamar isDivisible quatro vezes retornand o esperado', () => {
  randomNumber = jest
    .fn()
    .mockReturnValueOnce(20)
    .mockReturnValueOnce(180)
    // .mockReturnValue()

  expect(isDivisible(2)).toBe(true);
  expect(isDivisible).toHaveBeenCalledTimes(2);

  expect(isDivisible(2)).toBe(true);
  expect(isDivisible).toHaveBeenCalledTimes();

  // expect(isDivisible(2)).toBe(true);
  // expect(isDivisible).toHaveBeenCalledTimes(1);
})

// exports.randomRGBColor = function() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
//   }
//   exports.randomNumber = function() {
//   return Math.floor(Math.random() * 101);
//   }
//   exports.isDivisible = function(number) {
//   return (exports.randomNumber() % number === 0);
//   }
