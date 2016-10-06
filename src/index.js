/*eslint-disable import/default */
import 'babel-polyfill'; // Some features in ES6 (i.e. object.assign) cannot be transpiled, which is why we are importing a polyfill
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// CSS imports via WEBPACK
import './stylesheets/main.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// props are passed down to App.js from here
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
