/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./assets/headshot-cropped.png');
require('../favicon.ico');

// props are passed down to App.js from here
let root = document.getElementById('app');
render(<Router history={browserHistory} routes={routes} />, root);
