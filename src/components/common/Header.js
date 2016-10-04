import React, {PropTypes} from 'react';
import Navigation from './Navigation';

import '../../stylesheets/components/_Header.scss';

const Header = () => {
  return (
    <div className="Header row">

      <div className="col-xs-12">
        <h2>Erik Gomez</h2>
        <input type="submit" value="H" className="pull-right" />
      </div>

      <Navigation
        listClass="header-nav row"
        itemClass="col-xs-6"
        linkClass="" />
    </div>
  );
};

export default Header;
