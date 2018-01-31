//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //esta dependencia es para requerir props
//assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title : PropTypes.string.isRequired,
    items : PropTypes.array.isRequired //isRequired camelName
    //  title: PropTypes.string.IsRequired, //aqui hacemos que la propiedadque se recibe de title sea requerida
    //  items: PropTypes.array.IsRequired   //asoi como elitem tmb es requerido
  };

  render() {
    const { title, items } = this.props; //se mandan a llamar las propieddades de title e items
    //se asignan las propiedaes de title e items a this.props this.props.title
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>

          <ul className="Menu">
            {items && items.map((item, key) => <li key= {key}>{item.title}</li>)}
          </ul>
        </div>

      </div>
    );
  }
}

export default Header; //se exporta para que se pueda utilizar donde sea requerido

// se usa map para obtener el array se le  pasa el item y una key una funcion arrow dentro del li se pasa la jey y el item.title

//pregunto si item esta inicializad y si esta inicialicado
