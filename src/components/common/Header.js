import React from 'react';
import {Link} from 'react-router';

import css from '../../css/sass/components/_header.scss'; // eslint-disable-line

const Header = () => {
  return (
    <header className={css.header}>
      <div>
        <h2>
          <Link to="/" className={css.removeTextDecoration}>
            Erik Gomez
          </Link>
        </h2>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  css: React.PropTypes.object
};
