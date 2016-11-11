import React from 'react';
import {Link} from 'react-router';

const NavigationItem = ({ text, url, fontAwesome }) => {
  return (
    <li>
      <Link to={url}>
        <i className={fontAwesome} aria-hidden="true"></i>
        <p>{text}</p>
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  fontAwesome: React.PropTypes.string.isRequired
};

export default NavigationItem;
