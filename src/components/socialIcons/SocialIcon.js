import React from 'react';

const SocialIcon = ({ socialLink, alt, logo }) => {
  return (
    <li>
      <a href={socialLink}>
        <img
          src={logo}
          alt={alt} />
      </a>
    </li>
  );
};

SocialIcon.propTypes = {
  socialLink: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired
};

export default SocialIcon;
