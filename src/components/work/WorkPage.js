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
      <p>I designed, <a href="https://github.com/erkgmz/lp-react" target="_blank" rel="noopener noreferrer">developed</a>, and deployed this website using modern
        JavaScript, Node.js and React.</p>
    </article>
  );
};

export default styleable(css)(WorkPage);
