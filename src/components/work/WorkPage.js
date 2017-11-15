import React from 'react';
import {Link} from 'react-router';
import Headline from '../common/Headline';
import Tile from './Tile';
import {projectsList} from './projects-list';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Work = Passion" />
      <p>I am web/front-end developer with UI/UX and marketing experience. Below are some of the brands I've consulted and developed for.</p>
      <p>I currently work fulltime at an agency in Irvine, CA but if you need help and think we can work together, feel free to <Link to="/contact">send me a message</Link>.</p>
      <div className={css.tiles}>
        {projectsList.map( ( project, key ) => <Tile css={css} project={project} key={key} /> )}
      </div>
    </article>
  );
};

export default WorkPage;
