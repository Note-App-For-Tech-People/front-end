import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faUser, faTerminal } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faUser, faTerminal)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
