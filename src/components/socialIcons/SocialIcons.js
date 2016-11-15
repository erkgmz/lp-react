import React from 'react';

import SocialIcon from './SocialIcon';

import styleable from 'react-styleable';
import css from '../../css/sass/components/_social.scss'; // eslint-disable-line

const SocialIcons = () => {
  return (
    <ul className={css.social}>
      <SocialIcon
        socialLink="https://www.linkedin.com/in/erkgmz"
        fontAwesomeClass="fa fa-linkedin" />
      <SocialIcon
        socialLink="https://twitter.com/erikgomezco"
        fontAwesomeClass="fa fa-twitter" />
      <SocialIcon
        socialLink="https://github.com/erkgmz"
        fontAwesomeClass="fa fa-github" />
    </ul>
  );
};

export default styleable(css)(SocialIcons);
