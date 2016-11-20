import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import WorkItems from './WorkItems';
import projects from './projects';

import styleable from 'react-styleable';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Portfolio" />
      <Byline text="I design & develop responsive apps & websites" />
      <p>
        Want to learn about how I used React.js to build this page?
        &nbsp;
        <a
          href="https://github.com/erkgmz/lp-react"
          target="_blank"
          rel="noopener noreferrer">
          Checkout the project repo on GitHub
        </a>
      </p>
      <WorkItems projects={projects} />
    </article>
  );
};

export default styleable(css)(WorkPage);
