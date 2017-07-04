import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'; // eslint-disable-line import/no-named-as-default
import HomePage from './components/home/HomePage';
// import AboutPage from './components/about/AboutPage';
import ExperiencePage from './components/experience/ExperiencePage';
import ContactPage from './components/contact/ContactPage';
import ErrorPage from './components/error/ErrorPage';
// import ServicesPage from './components/services/ServicesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/*<Route path="/about" component={AboutPage} />*/}
    <Route path="/work" component={ExperiencePage} />
    <Route path="/contact" component={ContactPage} />
    {/*<Route path="/services" component={ServicesPage} />*/}
    <Route path="/*" component={ErrorPage} />
  </Route>
);
