import React, { Component } from 'react';
import './App.css';

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons. Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log(). Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!
// function handleClick() {
//   console.log('Clicou no botão 1!');
// }

// function handleClick2() {
//   console.log('Clicou no botão 2!');
// }

// function handleClick3() {
//   console.log('Clicou no botão 3!');
// }

// 7. Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. 8. Faça isso acontecer!
// 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

class App extends Component {
  // 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
  constructor() {
    super()

    // 4 - Garanta acesso ao objeto this na função que você declarou.
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    // 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
    // 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
    this.state = {
      cliquesBotao: 0,
      cliquesBotao2: 0,
      cliquesBotao3: 0
    }
  }

  // 6 - Agora, quando um botão foi clicado, altere de forma assíncrona o estado deste botão de zero para um.
  handleClick() {
    console.log('Clicou no botão 1!');
    // 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
    this.setState((estadoAnterior, _props) => ({
      cliquesBotao: estadoAnterior.cliquesBotao + 1
    }))
  }

  handleClick2() {
    console.log('Clicou no botão 2!');
    this.setState((estadoAnterior, _props) => ({
      cliquesBotao2: estadoAnterior.cliquesBotao2 + 1
    }))
  }

  handleClick3() {
    console.log('Clicou no botão 3!');
    this.setState((estadoAnterior, _props) => ({
      cliquesBotao3: estadoAnterior.cliquesBotao3 + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão 1 {this.state.cliquesBotao}</button>
        {/* 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log(). */}
        <button onClick={this.handleClick2}>Meu botão 2 {this.state.cliquesBotao2}</button>
        <button onClick={this.handleClick3}>Meu botão 3 {this.state.cliquesBotao3}</button>
      </div>
    )
  }
}

export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   // A função 'constructor' é a primeira coisa que é executada, quando um componente React é criado, ou seja, quando é colocado na tela do navegador.
//   constructor() {
//     // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
//     super()
//     // A lógica extra vai aqui! A função abaixo vincula "manualmente" o `this` à nossa função
//     this.handleClick = this.handleClick.bind(this)

//   }
//   handleClick() {
//     // Essa chamada ao 'this' retorna 'undefined'?!
//     // console.log(this)
//     // Agora esse log retorna o objeto `this`!
//     // Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
//     // e tudo o mais daqui de dentro
//     // console.log(this)
//     console.log('Clicou!')
//   }

//   render() {
//     // Já essa chamada ao 'this', feita de dentro da função 'render', retorna o objeto que esperamos
//     console.log(this)

//     return (
//       <div>
//         {/* No React, precisamos dizer explicitamente que queremos uma função de dentro da nossa classe
//         através da sintaxe `this.minhaFuncao` para usá-la num evento */}
//         <button onClick={this.handleClick}>Meu botão 1</button>
//       </div>
//     )
//   }
// }

// export default App;
