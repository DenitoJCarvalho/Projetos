//Library React
import React from 'react';
import ReactDOM from 'react-dom';

//routes
import Router from './routes';

//css
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


