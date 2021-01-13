// import React from 'react';
// import './App.css';
// import Image from './Image';

// // Crie uma aplicação React na sua máquina via create-react-app com o nome content. Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
// // 1. Qual o nome do componente declarado acima?
// //    Image
// // 2. Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.
// function App() {
//   return (
//     <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {/* <UserProfile user={joao} />
        <UserProfile user={amelia} /> */}
        {/* Que tal gerar esses componentes filhos dinamicamente? */}
        {users.map((user, index) => <UserProfile user={user} key={index} />)}
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import './App.css';
// import Order from './Order';

// // 1. O que o componente App é em relação a Order ?
// //    Componente pai(parent)
// class App extends React.Component {
//   render() {
//     const headphone = {
//       id: 102,
//       user: "cena@gmail.com",
//       product: "Razer Headphone",
//       price: {
//         value: 99.99,
//         currency: "dollars"
//       }
//     };

//     const energyDrink = {
//       id: 77,
//       user: "cena@gmail.com",
//       product: "Monster 500mL",
//       price: {
//         value: 9.99,
//         currency: "dollars"
//       }
//     };

//     return (
//       <div className="App">
//         <h1> Orders recently created </h1>
//          {/*  adicione os componentes aqui */}
//          {/* 2. Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App . */}
//          <Order order={headphone} />
//          <Order order={energyDrink} />
//       </div>
//     );
//   }
// }

// export default App;
