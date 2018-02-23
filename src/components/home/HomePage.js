import React from 'react';
import Headline from '../common/Headline';
import PrimaryCTA from '../common/PrimaryCTA';
import Typewriter from '../common/Typewriter';
import SocialIcons from '../socialIcons/SocialIcons';
import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <div className={css.copyBlock}>
        <Headline text="Hi, I'm Erik - I design and build" />
        <Typewriter projects={['Shopify Stores', 'Landing Pages', 'Sales Funnels', 'Email Templates']}
          typeSpeed={150} // typing rate (milliseconds)
          pause={1500} // duration of pause before next word (milliseconds)
          cursorDurartion={0.8} // cursor blink rate (milliseconds)
          cssClass={css.typewriter}
          cssHighlight={css.highlight}
        />
      </div>
      <div className={css.ctaContainer}>
        <PrimaryCTA path="/contact" text="CONTACT" />
        <PrimaryCTA path="/work" text="VIEW PORTFOLIO" />
      </div>
      <div className={css.socialIcons}>
        <SocialIcons />
      </div>
    </article>
  );
};

export default HomePage;

HomePage.propTypes = {
  css: React.PropTypes.object
};
