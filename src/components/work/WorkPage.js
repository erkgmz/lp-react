import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import WorkItems from './WorkItems';

import styleable from 'react-styleable';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Portfolio" />
      <Byline text="I design & develop responsive apps & websites" />
      <WorkItems />
    </article>
  );
};

export default styleable(css)(WorkPage);
