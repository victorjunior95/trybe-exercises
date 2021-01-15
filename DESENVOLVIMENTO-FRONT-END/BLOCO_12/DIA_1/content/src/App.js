import React, { Component } from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!')
}

class App extends Component {
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;
