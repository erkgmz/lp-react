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
      <Headline text="Hi, I'm Erik" />
      <Byline text="A Front-End Developer & Digital Marketer in Bakersfield, CA." />
      <CopyBlock styles={css} />
      <ContactCTA path="/contact" text="Contact Me" />
      <p>Or connect with me on social.</p>
      <SocialIcons />
    </article>
  );
};

export default styleable(css)(HomePage);

HomePage.propTypes = {
  css: React.PropTypes.object
};
