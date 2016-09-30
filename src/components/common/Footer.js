import React from 'react';
import { Link } from 'react-router';

// COMPONENTS
import NavLinks from './NavLinks.js';

const Footer = () => {
  return (
    <div>
      <nav>
        <NavLinks />
      </nav>
      <p>	&copy; Erik Gomez | Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Footer;
