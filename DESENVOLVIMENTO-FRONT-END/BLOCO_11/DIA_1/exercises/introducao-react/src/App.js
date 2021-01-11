import logo from './logo.svg';
import './App.css';

// c) por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .
const toDoList = ['Alongamento pré-treino', 'Aquecimento', 'Exercícios', 'Alongamento pós-treino', 'Banho', 'Desjejum', 'Estudar', 'Lanche', 'Tempo livre', 'Startup', 'Almoço'];

// 2. Crie uma lista de tarefas simples seguindo os passos abaixo:
  // a) insira a função a seguir acima do seu App :
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    // b) agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
    // task('Hello')

    toDoList.map(task)
  );
}

export default App;
