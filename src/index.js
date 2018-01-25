//Aqui es donde se renderiza todo el contenido

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App'; //se importa el archivo app.js que esta dentro de la carpeta componentes
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
