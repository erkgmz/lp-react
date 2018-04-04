/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('../favicon.ico');
require('./assets/code_bg_dark@3x.jpg');

let root = document.getElementById('app');
render(<Router history={browserHistory} routes={routes} />, root);
