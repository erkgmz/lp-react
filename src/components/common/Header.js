import React from 'react';
import {Link} from 'react-router';
import styleable from 'react-styleable';

import css from '../../css/sass/components/_header.scss'; // eslint-disable-line

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.removeBorderBottom}>
        <h1>Erik Gomez</h1>
      </Link>
    </header>
  );
};

export default styleable(css)(Header);

Header.propTypes = {
  css: React.PropTypes.object
};
