import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';
import List from '../common/List';
import Iterate from './Iterate';

import {skills, devSkills, digiSkills} from './skills';

const CopyBlock = props => {
  return (
    <div className={props.styles.copyblockContainer}>
      <div className={props.styles.headlineBlock}>
        <Byline text="What I Do" />
        <h2 className={props.styles.pipe}>|</h2>
        <Iterate list={skills} textColor={props.styles.mute} />
      </div>

      <p>I'm a front-end developer that combines a background in digital marketing with modern web development to deliver quality websites and applications built for performance and user experience. I am experienced in numerous languages and frameworks and highly adaptable to work in any stage of the development life cycle.</p>

      <div className={props.styles.skillsContainer}>
        <div>
          <h2>Web Development</h2>
          <List listClass={props.styles.skills} items={devSkills} />
        </div>

        <div>
          <h2>Digital Marketing</h2>
          <List listClass={props.styles.skills} items={digiSkills} />
        </div>
      </div>
    </div>
  );
};

CopyBlock.propTypes = {
  styles: PropTypes.object.isRequired
};

export default CopyBlock;
