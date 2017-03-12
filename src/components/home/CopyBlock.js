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
        <p>I develop websites and web apps with modern JavaScript and technologies like React and Node.js.</p>

        <p>I have several years experience working with startups and global companies in digital marketing and web development, specifically as a front-end developer.</p>

        <p>If you need digital services, I am available for the following:</p>

        <ul className={this.props.styles.skills}>
          <li><p>Web Development</p></li>

          <ul>
            <li><p>Front-End Development</p></li>
            <li><p>Full-Stack JavaScript</p></li>
            <li><p>Mobile & Responsive Development</p></li>
            <li><p>UX/UI Design</p></li>
          </ul>

          <li><p>Marketing</p></li>

          <ul>
            <li><p>Digital Marketing</p></li>
            <li><p>Search Engine Optimization (SEO)</p></li>
            <li><p>Content Marketing</p></li>
            <li><p>Data & Analytics</p></li>
          </ul>
        </ul>
      </div>
    );
  }
}

CopyBlock.propTypes = {
  styles: PropTypes.object.isRequired
};

export default CopyBlock;
