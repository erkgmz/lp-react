import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';

import skills from './skills';

class CopyBlock extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentSkill: skills[0],
      skillIndex: 0
    };

    this.iterateSkill = this.iterateSkill.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentWillMount() {
    let intervalId = setInterval(this.iterateSkill, 1200);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateIndex() {
    let {skillIndex} = this.state;
    skillIndex++;

    // start over
    // if(skillIndex >= skills.length) {
    //   skillIndex = 0;
    // }

    // stop at the end
    if(skillIndex === skills.length) {
      skillIndex = skills.length;
      clearInterval(this.state.intervalId);
    }

    this.setState({ skillIndex });
  }

  iterateSkill() {
    let {skillIndex} = this.state;
    let currentSkill = skills[skillIndex];

    this.updateIndex();

    this.setState({ currentSkill });
  }

  render() {
    return (
      <div className={this.props.styles.copyblockContainer}>
        <Byline text="What I Do" iterator={this.state.currentSkill} />
        <p>I design and develop digital interfaces for the web and execute marketing campaigns.</p>

        <p>My web development experience gives me a unique insight to developing effective digital marketing strategies that get the results you need. Wether it's planning an awareness campaign, improving your site's speed, or a complete site redesign, I have the skills that keep your marketing strategy in sync with your user's experience.</p>

        <div className={this.props.styles.skillsContainer}>
          <div>
            <h2>Web Development</h2>
            <ul className={this.props.styles.skills}>
              <li><p>Front-End Development</p></li>
              <li><p>Responsive & Mobile Friendly</p></li>
              <li><p>Full-Stack JavaScript</p></li>
            </ul>
          </div>

          <div>
            <h2>Digital Marketing</h2>
            <ul className={this.props.styles.skills}>
              <li><p>SEM & SEO</p></li>
              <li><p>Email Marketing</p></li>
              <li><p>Data & Analytics</p></li>
            </ul>
          </div>
        </div>
        <p>Let's have coffee?</p>
      </div>
    );
  }
}

CopyBlock.propTypes = {
  styles: PropTypes.object.isRequired
};

export default CopyBlock;
