import React, {PropTypes} from 'react';

const Byline = props => {
  return (
    <h2>{props.text}</h2>
  );
};

Byline.propTypes = {
  text: PropTypes.string.isRequired
};

export default Byline;
