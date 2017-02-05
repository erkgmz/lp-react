import React from 'react';
import styleable from 'react-styleable';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import CopyBlock from './CopyBlock';
import SocialIcons from '../socialIcons/SocialIcons';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <Headline text="Hi, I'm Erik" />
      <Byline text="Freelance front-end web developer in Southern California." />
      <CopyBlock />
      <SocialIcons />
    </article>
  );
};

export default styleable(css)(HomePage);

HomePage.propTypes = {
  css: React.PropTypes.object
};
