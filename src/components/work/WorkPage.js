import React from 'react';
import Headline from '../common/Headline';
import ProjectTile from './ProjectTile';
import {projectsList} from './projects-list';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <Headline text="Work = Passion" />
      <div className={css.tiles}>
        <ProjectTile css={css} project={projectsList[0]} />
        <ProjectTile css={css} project={projectsList[1]} />
        <ProjectTile css={css} project={projectsList[2]} />
        <ProjectTile css={css} project={projectsList[3]} />
        <ProjectTile css={css} project={projectsList[4]} />
        <ProjectTile css={css} project={projectsList[5]} />
      </div>
    </article>
  );
};

export default WorkPage;
