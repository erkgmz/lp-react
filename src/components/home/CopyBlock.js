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

      <p>I design and develop digital interfaces for the web and execute marketing campaigns.</p>

      <p>My web development experience gives me a unique insight to developing effective digital marketing strategies that get the results you need. Wether it's planning an awareness campaign, improving your site's speed, or a complete site redesign, I have the skills that keep your marketing strategy in sync with your user's experience.</p>

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
      <p>Let's have coffee?</p>
    </div>
  );
};

CopyBlock.propTypes = {
  styles: PropTypes.object.isRequired
};

export default CopyBlock;
