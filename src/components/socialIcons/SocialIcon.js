import React from 'react';

const SocialIcon = ({ socialLink, fontAwesomeClass }) => {
  return (
    <li>
      <a href={socialLink}>
        <i
          className={fontAwesomeClass}
          aria-hidden="true">
        </i>
      </a>
    </li>
  );
};

SocialIcon.propTypes = {
  socialLink: React.PropTypes.string.isRequired,
  fontAwesomeClass: React.PropTypes.string.isRequired
};

export default SocialIcon;
