import React from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Cards from './Cards';

import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line
import cards from '../../css/sass/components/_cards.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Experience" />
      <p>Below are a few of my web development projects. <Link to="/contact">Send me a message</Link> if you'd like to see more or have any questions.</p>
      <p>For a current copy of my resume, please <a href="/resume.pdf" target="_blank" rel="noopener noreferrer nofollow">click here</a>.</p>
      <Cards styles={cards} />
    </article>
  );
};

export default WorkPage;
