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
        <Headline text="Front-End Developer" />
        <p>As a full-time Front-End Developer at Ad Exchange, I work on the Shopify platform with a team  of creative and engineering geniuses that take a project from concept to launch.</p>
        <p>As I freelancer, I help clients with different creative and development needs, including:</p>
        <ul>
          <li><b>UX Design</b></li>
          <li><b>Responsive Emails</b> (design & development)</li>
          <li><b>Front-End Development</b> (HTML, CSS, JavaScript)</li>
        </ul>
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
