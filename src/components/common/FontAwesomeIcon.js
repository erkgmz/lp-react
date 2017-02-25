import React from 'react';

const FontAwesomeIcon = ({ faClass }) => {
  return (
    <i className={faClass} aria-hidden="true"></i>
  );
};

export default FontAwesomeIcon;

FontAwesomeIcon.propTypes = {
  faClass: React.PropTypes.string.isRequired
};
