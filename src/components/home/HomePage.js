import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import CopyBlock from './CopyBlock';

const HomePage = () => {
  return (
    <article>
      <Headline text="Erik Gomez" />
      <Byline text="Front end developer in Bakersfield, Ca" />
      <CopyBlock />
    </article>
  );
};

export default HomePage;
