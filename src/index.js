/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss';

// props are passed down to App.js from here
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
