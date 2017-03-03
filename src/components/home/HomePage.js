import React from 'react';
import styleable from 'react-styleable';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import CopyBlock from './CopyBlock';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = () => {
  return (
    <article className={css.homepage}>
      <Headline text="I'm Erik" />
      <Byline text="Web developer & front-end engineer in California." />
      <CopyBlock
        containerStyle={css.container}
        socialContainer={css.socialContainer} />
    </article>
  );
};
// try to remove CopyBlock props, this is just a quick and dirty solution
export default styleable(css)(HomePage);

HomePage.propTypes = {
  css: React.PropTypes.object
};
