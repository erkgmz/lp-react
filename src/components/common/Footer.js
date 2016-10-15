import React from 'react';

import Navigation from './Navigation.js';

const Footer = () => {
  return (
    <footer>
      <Navigation
        listClass="footer-nav row"
        itemClass="col-xs-12"
        linkClass="" />
      <p>	&copy; Erik Gomez | Lorem ipsum dolor sit amet.</p>
    </footer>
  );
};

export default Footer;
