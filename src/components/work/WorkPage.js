import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import WorkItems from './WorkItems';
import PROJECTS from './projects';

import styleable from 'react-styleable';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Portfolio" />
      <Byline text="I design & develop responsive websites & web applications." />
      <WorkItems projects={PROJECTS} />
      <p>
        This website was <a href="https://github.com/erkgmz/lp-react" target="_blank" rel="noopener noreferrer">developed</a> with modern
        JavaScript, including Node.js & React.
      </p>
    </article>
  );
};
// Fix links to have font-weight: 700 with underiline
export default styleable(css)(WorkPage);
