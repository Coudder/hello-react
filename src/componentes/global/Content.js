import React, { Component } from 'react';
import './css/Content.css'; // para cada componente se importa o manda a llamar su archivo de css para los estilos

class Content extends Component {
  render() {
    return (
      <div className="Content">
          <h1> Soy el Contenido</h1>
      </div>
    );
  }
}

export default Content;

//Asi es como se crea un componente basico
/*class Content extends Component {
  render() {
    return (
      <div className="Content">
          <h1> Soy el Contenido</h1>
      </div>
    );
  }
}

export default Content;*/
