import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './navigation/Navigation';
import styleable from 'react-styleable';

import css from '../css/sass/components/_base.scss'; // eslint-disable-line

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
  children: PropTypes.object.isRequired,
  css: PropTypes.object
};

export default styleable(css)(App);
