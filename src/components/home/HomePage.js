import React from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import WorkCTA from '../common/WorkCTA';
import LearnMoreCTA from '../common/LearnMoreCTA';
import CopyBlock from '../common/CopyBlock';
import SocialIcons from '../socialIcons/SocialIcons';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

// Remove/unroute /services page
// Remove copyBlock
// Remove learnMoreCta

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <div>
        <Headline text="Hi, I'm Erik" />
        <Byline text="Front-End Developer at The AdExchange Group in Irvine, CA." />
      </div>
      {/*<CopyBlock styles={css} />*/}
      <div className={css.ctaContainer}>
        <WorkCTA path="/work" text="PORTFOLIO" />
        {/*<LearnMoreCTA path="/services" text="LEARN MORE" />*/}
      </div>
    </article>
  );
};

export default HomePage;

HomePage.propTypes = {
  css: React.PropTypes.object
};
