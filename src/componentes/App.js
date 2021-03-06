//dependencias
import React, { Component } from 'react'; //se importa la funcion componente de react para ya no usar React.Component al crear la clase


//componentes
import Header from './global/Header'; //Aqui se importan los componentes creados ya que aqui es donde se renderiza la principal aplicacion
import Content from './global/Content';// en este caso todos loc componentes estan dentro de la carpeta global
import Footer from './global/Footer';

//data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title="BitCreativo" items={items} />
      <Content/>
      <Footer/>
      </div>
    );
  }
}

export default App;// se exporta  para que se pueda utilizar en el index.js

// Aqui es donde se imprime el contenido de cada compoente

//aqui se envian dos props al componente header title e items estos se sacan del array de menu.js
