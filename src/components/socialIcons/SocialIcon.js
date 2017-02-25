import React from 'react';
import FontAwesomeIcon from '../common/FontAwesomeIcon';

const SocialIcon = ({ outboundLink, faClass }) => {
  return (
    <li>
      <a
        href={outboundLink}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon faClass={faClass} />
      </a>
    </li>
  );
};

SocialIcon.propTypes = {
  outboundLink: React.PropTypes.string.isRequired,
  faClass: React.PropTypes.string.isRequired
};

export default SocialIcon;
