import React from 'react';

// import '../../stylesheets/components/_Highlighter.scss';

const Highlighter = ({ text }) => {
  return (
    <h2>{text}</h2>
  );
};

Highlighter.propTypes = {
  text: React.PropTypes.string
};

export default Highlighter;
