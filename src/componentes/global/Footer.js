//deoendencias
import React, { Component } from 'react'; //importaos react
import PropTypes from 'prop-types'; //importamos los proptypes para que sean requeridos o no
//assets
import './css/Footer.css';

class Footer extends Component {
    static propTypes = {
    copyrigth: PropTypes.string //aqui pasamos a copyright quue no es necesariamente requerido
    };

  render() {
    const {copyright = '&copy BitCreativo 2018'} = this.props;

        return (
      <div className="Footer">
          < p dangerouslySetInnerHTML={{__html: copyright}}/>
        </div>
    );
  }
}

export default Footer;

//dangerouslySetInnerHTML={{__html: copyright}}  es  para que tome el valor copyright c
