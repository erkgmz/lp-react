import React, {PropTypes} from 'react';

// COMPONENTS
import Navigation from './Navigation.js';

const Header = () => {
  return (
    <nav className="pull-right">
      <Navigation />
    </nav>
  );
};

export default Header;
