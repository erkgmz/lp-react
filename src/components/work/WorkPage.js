import React, {Component} from 'react';
import {Link} from 'react-router';
import Headline from '../common/Headline';
import PrimaryCTA from '../common/PrimaryCTA';
import Tile from './Tile';
import {projectsList} from './projects-list';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

const WorkPage = () => {
  return (
    <article className={css.workpage}>
      <div className={css.copyBlock}>
        <Headline text="Insert Your Project Here" />
        <p>If you need...</p>
        <ul>
          <li>To launch that Shopify store</li>
          <li>To make your emails responsive and better looking on more devices (even Outlook!)</li>
          <li>Help with UX/UI design</li>
          <li>A Front-End Developer to code up a fresh new website for you</li>
        </ul>
        <p>... then we need to talk</p>
        <div className={css.ctaWrap}>
          <PrimaryCTA path="/contact" text="SEND A MESSAGE" />
        </div>
      </div>
      <div className={css.tiles}>
        {projectsList.map( (project, key) => <Tile css={css} project={project} key={key} /> )}
      </div>
    </article>
  );
};

export default WorkPage;
