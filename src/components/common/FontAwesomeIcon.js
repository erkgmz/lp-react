import React, {PropTypes} from 'react';

const FontAwesomeIcon = ({ faClass }) => {
  return (
    <i className={faClass} aria-hidden="true"></i>
  );
};

export default FontAwesomeIcon;

FontAwesomeIcon.propTypes = {
  faClass: PropTypes.string.isRequired
};
