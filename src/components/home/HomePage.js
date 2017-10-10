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
        {/* <Headline text="HOW CAN I HELP?" /> */}
        <Headline text="Experienced Front-End Developer & Digital Marketer" />
        {<Byline text="I help deliver creative email campaigns, enhance user experience, and create ecommerce solutions." />}
        {<Byline text="Let's chat about your development and digital marketing needs." />}
        {/* <p>I am a Front-End developer with marketing, design & ecommerce experience.</p> */}
        {/* <p>I help clients launch creative email campaigns, enhance user experience, and create ecommerce solutions with Shopify.</p> */}
        {/* <p>Let's chat.</p> */}
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
