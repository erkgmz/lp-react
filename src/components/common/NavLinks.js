import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavLinks = () => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active">Welcome</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/work" activeClassName="active">Work</Link>
      {" | "}
      <Link to="/contact" activeClassName="active">Contact</Link>
    </div>
  );
};

export default NavLinks;
