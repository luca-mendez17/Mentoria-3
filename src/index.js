import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {DartThemeOn} from './components/Button'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DartThemeOn>
      <App />
      </DartThemeOn>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
