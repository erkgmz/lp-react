import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import CopyBlock from './CopyBlock';
import styleable from 'react-styleable';

import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line

const HomePage = ({css}) => {
  return (
    <article className={css.homepage}>
      <Headline text="Erik Gomez" />
      <Byline text="Front end developer in Bakersfield, Ca" />
      <CopyBlock />
    </article>
  );
};

export default styleable(css)(HomePage);

HomePage.propTypes = {
  css: React.PropTypes.object
};
