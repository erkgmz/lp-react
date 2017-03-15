import React from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import WorkItems from './WorkItems';
import Techs from './Techs';
import PROJECTS from './projects';

import styleable from 'react-styleable';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Work & Skills" />
      <Byline text="Previous Projects, and Digital Skills" />
      <p>Here are a few of my web development projects. <Link to="/contact">Send me a message</Link> if you'd like to see more or have any questions.</p>
      <WorkItems projects={PROJECTS} />
      <Techs style={css} />
      <p>This site was designed, <a href="https://github.com/erkgmz/lp-react" target="_blank" rel="noopener noreferrer">developed</a>, and deployed by me with modern
        JavaScript, Node.js, and React.</p>
    </article>
  );
};

export default styleable(css)(WorkPage);
