import React, {PropTypes} from 'react';
// import { Link, IndexLink } from 'react-router';

// COMPONENTS
import NavLinks from './NavLinks.js';

const Header = () => {
  return (
    <div>
      <nav className="pull-right">
        <NavLinks />
      </nav>
    </div>
  );
};

export default Header;
