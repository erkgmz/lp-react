import React, {PropTypes} from 'react';
import Navigation from './Navigation';

import '../../stylesheets/components/_Header.scss';

const Header = () => {
  return (
    <div className="Header row">
      <h2 className="col-xs-10">ERIK GOMEZ</h2>
      <Navigation />
    </div>
  );
};

export default Header;
