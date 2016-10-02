import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../../stylesheets/components/_Navigation.scss';

const Navigation = () => {
  return (
    <ul className="Navigation">
      <li className="col-xs-12">
        <IndexLink to="/" activeClassName="active">HOME</IndexLink>
      </li>
      <li className="col-xs-12">
        <Link to="/about" activeClassName="active">ABOUT</Link>
      </li>
      <li className="col-xs-12">
        <Link to="/work" activeClassName="active">WORK</Link>
      </li>
      <li className="col-xs-12">
        <Link to="/contact" activeClassName="active">CONTACT</Link>
      </li>
    </ul>
  );
};

export default Navigation;
