import React, {PropTypes} from 'react';

import '../../stylesheets/components/_Hamburger.scss';

const Hamburger = () => {
  return (
    <svg width="35" height="35" viewBox="0 0 50 55" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g fill="firebrick" id="Hamburger">
        <path d="M0,40 L55,40 L55,55 L0,55 L0,40 Z M0,20 L55,20 L55,35 L0,35 L0,20 Z M0,0 L55,0 L55,15 L0,15 L0,0 Z"></path>
      </g>
    </svg>
  );
};

export default Hamburger;
