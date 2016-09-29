import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      {" | "}
      <Link to="/work" activeClassName="active">Work</Link>
      {" | "}
      <Link to="/contact" activeClassName="active">Contact</Link>
    </nav>
  );
};

export default Header;
