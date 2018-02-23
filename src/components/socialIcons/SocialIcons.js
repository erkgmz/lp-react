import React from 'react';
import SocialIcon from './SocialIcon';
import ICONS from './icons';

const SocialIcons = ({ css }) => {
  return (
    <ul>
      {ICONS.map( (icon, key) => {
        return (
          <SocialIcon
            key={key}
            outboundLink={icon.outboundLink}
            faClass={icon.faClass}
            css={css} />
        );
      })}
    </ul>
  );
};

SocialIcons.propTypes = {
  css: React.PropTypes.obj
};

export default SocialIcons;
