import React from 'react';

import SocialIcon from './SocialIcon';

const SocialIcons = () => {
  return (
    <ul>
      <SocialIcon
        socialLink="https://www.linkedin.com/in/erkgmz"
        alt="LinkedIn"
        logo="#" />
      <SocialIcon
        socialLink="https://twitter.com/erikgomezco"
        alt="Twitter"
        logo="#" />
      <SocialIcon
        socialLink="https://github.com/erkgmz"
        alt="Github"
        logo="#" />
    </ul>
  );
};

export default SocialIcons;
