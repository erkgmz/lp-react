import React from 'react';

const Byline = ({ text }) => {
  return (
    <h2>{text}</h2>
  );
};

Byline.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Byline;
