import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './navigation/Navigation';
import styleable from 'react-styleable';

import css from '../css/sass/components/_app.scss'; // eslint-disable-line
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import '../../favicon.ico';

const App = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      {children}
      <Navigation />
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  css: React.PropTypes.object
};

export default styleable(css)(App);
