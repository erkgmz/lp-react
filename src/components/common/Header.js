import React from 'react';
import {Link} from 'react-router';
import styleable from 'react-styleable';

import SocialIcons from '../socialIcons/SocialIcons';

import css from '../../css/sass/components/_header.scss'; // eslint-disable-line

const Header = () => {
  return (
    <header className={css.header}>
      <div>
        <Link to="/" className={css.removeBorderBottom}>
          <h2>Erik Gomez</h2>
        </Link>
        <SocialIcons />
      </div>
    </header>
  );
};

export default styleable(css)(Header);

Header.propTypes = {
  css: React.PropTypes.object
};
