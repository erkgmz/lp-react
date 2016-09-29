import React from 'react';
import { Route, IndexRoute } from 'react-router';

// COMPONENTS
import App from './components/App.js'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage.js';
import WorkPage from './components/work/WorkPage.js';
import ContactPage from './components/contact/ContactPage.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={AboutPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/work" component={WorkPage} />
    <Route path="/contact" component={ContactPage} />
  </Route>
);
