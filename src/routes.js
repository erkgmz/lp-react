import React from 'react';
import { Route, IndexRoute } from 'react-router';

// COMPONENTS
import App from './components/App.js'; // eslint-disable-line import/no-named-as-default
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import WorkPage from './components/work/WorkPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/work" component={WorkPage} />
    <Route path="/contact" component={ContactPage} />
  </Route>
);
