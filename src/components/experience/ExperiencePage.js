import React from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Cards from './Cards';

import css from '../../css/sass/components/_experiencepage.scss'; // eslint-disable-line
import cards from '../../css/sass/components/_cards.scss'; // eslint-disable-line

const ExperiencePage = () => {
  return (
    <article className={css.experience}>
      <Headline text="Experience" />
      <p>Below are a few of my web development projects. <Link to="/contact">Send me a message</Link> if you'd like to see more or have any questions.</p>
      <Cards styles={cards} />
    </article>
  );
};

export default ExperiencePage;
