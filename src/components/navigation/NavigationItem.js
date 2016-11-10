import React from 'react';
import {Link} from 'react-router';

const NavigationItem = ({ text, pageUri, logo }) => {
  return (
    <li>
      <Link to={pageUri}>
        <img src={logo} />
        <p>{text}</p>
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  pageUri: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired
};

export default NavigationItem;
