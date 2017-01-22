import React from 'react';
import FontAwesomeIcon from '../common/FontAwesomeIcon';

const SocialIcon = ({ outboundLink, classes }) => {
  return (
    <li>
      <a
        href={outboundLink}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon classes={classes} />
      </a>
    </li>
  );
};

SocialIcon.propTypes = {
  outboundLink: React.PropTypes.string.isRequired,
  classes: React.PropTypes.string.isRequired
};

export default SocialIcon;
