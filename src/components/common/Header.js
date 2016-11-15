import React from 'react';
import styleable from 'react-styleable';

import css from '../../css/sass/components/_header.scss'; // eslint-disable-line

const Header = ({css}) => {
  return (
    <header
      className={css.header}>
      <h1>EG</h1>
    </header>
  );
};

export default styleable(css)(Header);

Header.propTypes = {
  css: React.PropTypes.object
};
