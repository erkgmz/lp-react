import React, {PropTypes} from 'react';
import Header from './header/Header';
import Footer from './footer/footer';
import css from '../css/sass/components/_base.scss'; // eslint-disable-line

const App = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  css: PropTypes.object
};

export default App;
