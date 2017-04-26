import React from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import ContactCTA from '../common/ContactCTA';
import LearnMoreCTA from '../common/LearnMoreCTA';
import CopyBlock from './CopyBlock';
import SocialIcons from '../socialIcons/SocialIcons';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <Headline text="Hi, I'm Erik" />
      <Byline text="I design and develop digital interfaces for the web." />
      <CopyBlock styles={css} />
      <div className={css.ctaContainer}>
        <ContactCTA path="/contact" text="Contact Me" />
        <LearnMoreCTA path="/services" text="Learn More" />
      </div>
    </article>
  );
};

export default HomePage;

HomePage.propTypes = {
  css: React.PropTypes.object
};
