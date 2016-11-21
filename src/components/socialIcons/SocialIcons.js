import React from 'react';

import SocialIcon from './SocialIcon';
import ICONS from './icons';

import styleable from 'react-styleable';
import css from '../../css/sass/components/_social.scss'; // eslint-disable-line

const SocialIcons = () => {
  return (
    <ul className={css.social}>
      {ICONS.map( (icon, key) => {
        return (
          <SocialIcon
            key={key}
            outboundLink={icon.outboundLink}
            classes={icon.classes} />
        );
      })}
    </ul>
  );
};

export default styleable(css)(SocialIcons);
