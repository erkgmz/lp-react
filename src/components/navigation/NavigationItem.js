import React from 'react';
import {Link} from 'react-router';

import FontAwesomeIcon from '../common/FontAwesomeIcon';

const NavigationItem = ({ text, routerPath, classes }) => {
  return (
    <li>
      <Link to={routerPath}>
        <FontAwesomeIcon classes={classes} />
        <p>{text}</p>
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  routerPath: React.PropTypes.string.isRequired,
  classes: React.PropTypes.string.isRequired
};

export default NavigationItem;
