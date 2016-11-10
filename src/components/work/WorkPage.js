import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import WorkItems from './WorkItems';

const WorkPage = () => {
  return (
    <article>
      <Headline text="Portfolio" />
      <Byline text="I design & develop responsive apps & websites" />
      <WorkItems />
    </article>
  );
};

export default WorkPage;
