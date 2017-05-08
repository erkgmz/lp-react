import React, {PropTypes} from 'react';
import HeaderWithNav from './header/HeaderWithNav';

import css from '../css/sass/components/_base.scss'; // eslint-disable-line

const App = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <HeaderWithNav />
      {children}
      <footer>
        <p>&copy; Copyright 2017</p>
      </footer>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  css: PropTypes.object
};

export default App;
