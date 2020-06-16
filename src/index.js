import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/Calculator'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <h1>Calculator</h1>
    <Calculadora />
  </>,
  document.getElementById('root')

);

serviceWorker.unregister();
