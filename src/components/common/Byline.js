import React, {PropTypes} from 'react';

const Byline = props => <h2>{props.text}</h2>;

Byline.propTypes = {
  text: PropTypes.string.isRequired
};

export default Byline;
