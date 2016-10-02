import React, {PropTypes} from 'react';

// COMPONENTS
import Navigation from './Navigation.js';

const Header = () => {
  return (
    <div className="row">
      <h3 className="col-xs-6">ERIK GOMEZ</h3>
      <nav className="pull-right">
        <Navigation />
      </nav>
    </div>
  );
};

export default Header;
