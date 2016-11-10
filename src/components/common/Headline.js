import React from 'react';

const Headline = ({ text }) => {
  return (
    <h1>{text}</h1>
  );
};

Headline.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Headline;
