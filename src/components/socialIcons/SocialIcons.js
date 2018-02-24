import React from 'react';
import SocialIcon from './SocialIcon';
import ICONS from './icons';

const SocialIcons = () => {
  return (
    <ul>
      {ICONS.map( (icon, key) => {
        return (
          <SocialIcon
            key={key}
            outboundLink={icon.outboundLink}
            faClass={icon.faClass} />
        );
      })}
    </ul>
  );
};

export default SocialIcons;
