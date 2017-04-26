// For mobile views. Similar to ../home/CopyBlock
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';
import List from '../common/List';
import Iterate from '../common/Iterate';
import {skills, devSkills, digiSkills} from '../common/skills';

import css from '../../css/sass/components/_servicespage.scss'; // eslint-disable-line

const ServicesPage = () => {
  return (
    <article className={css.servicespage}>
      <Headline text="In a Nutshell" />

      <div className={css.headlineBlock}>
        <h2 className={css.pipe}>|</h2>
        <Iterate list={skills} textColor={css.mute} />
      </div>

      <p>I'm a front-end developer that combines a background in digital marketing with modern web development to deliver websites and applications built for performance and user experience. I am experienced in numerous languages and frameworks and highly adaptable to work in any stage of the development life cycle.</p>

      <div className={css.skillsContainer}>
        <div>
          <h2>Web Development</h2>
          <List listClass={css.skills} items={devSkills} />
        </div>

        <div>
          <h2>Digital Marketing</h2>
          <List listClass={css.skills} items={digiSkills} />
        </div>
      </div>
    </article>
  );
};

export default ServicesPage;
