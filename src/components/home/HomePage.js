import React from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import PrimaryCTA from '../common/PrimaryCTA';
import SocialIcons from '../socialIcons/SocialIcons';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <div>
        <Headline text="Front-End Developer & Digital Marketer" />
        <Byline text="I help deliver responsive email campaigns, enhance user experience, and develop ecommerce solutions." />
        <Byline text="YOU NEED A HOW ITS DONE SECTION" />
        <Byline text="Let's chat about your development and digital marketing needs." />
      </div>
      <div className={css.ctaContainer}>
        <PrimaryCTA path="/work" text="VIEW MY WORK" />
        <PrimaryCTA path="/contact" text="MESSAGE ME" />
      </div>
    </article>
  );
};

export default HomePage;

HomePage.propTypes = {
  css: React.PropTypes.object
};
