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
        <Headline text="Hi, I'm Erik" />
        <Byline text="Front-End Developer at The AdExchange Group in Irvine, CA." />
      </div>
      <div className={css.ctaContainer}>
        <PrimaryCTA path="/work" text="EXPERIENCE" />
      </div>
    </article>
  );
};

export default HomePage;

HomePage.propTypes = {
  css: React.PropTypes.object
};
