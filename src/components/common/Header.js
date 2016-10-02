import React, {PropTypes} from 'react';

// COMPONENTS
import Navigation from './Navigation.js';

const Header = () => {
  return (
    <div className="row">
      <h2 className="col-xs-10">ERIK GOMEZ</h2>
      <h4 className="col-xs-2 pull-right">eg</h4>
      <nav>
        <Navigation />
      </nav>
    </div>
  );
};

export default Header;
