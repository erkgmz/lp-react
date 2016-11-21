import React from 'react';

const FontAwesomeIcon = ({ classes }) => {
  return (
    <i className={classes} aria-hidden="true"></i>
  );
};

export default FontAwesomeIcon;

FontAwesomeIcon.propTypes = {
  classes: React.PropTypes.string.isRequired
};
