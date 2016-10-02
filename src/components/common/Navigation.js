import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../../stylesheets/components/_Navigation.scss';

const Navigation = () => {
  return (
    <ul className="Navigation">
      <li><IndexLink to="/" activeClassName="active">Welcome</IndexLink></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
      <li><Link to="/work" activeClassName="active">Work</Link></li>
      <li><Link to="/contact" activeClassName="active">Contact</Link></li>
    </ul>
  );
};

export default Navigation;
