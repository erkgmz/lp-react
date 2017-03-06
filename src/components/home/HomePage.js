import React from 'react';
import {Link} from 'react-router';
import styleable from 'react-styleable';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import ContactCTA from '../common/ContactCTA';
import CopyBlock from './CopyBlock';
import SocialIcons from '../socialIcons/SocialIcons';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <Headline text="Hello!" />
      <Byline text="I'm a UX/UI Designer, Front-End Engineer, and Web Developer in Bakersfield, California." />
      <CopyBlock styles={css} />
      <ContactCTA path="/contact" text="Send me a message" />
      <p>Or connect with me on social.</p>
      <SocialIcons />
    </article>
  );
};

export default styleable(css)(HomePage);

HomePage.propTypes = {
  css: React.PropTypes.object
};
