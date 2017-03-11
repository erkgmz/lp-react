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
    let intervalId = setInterval(this.iterateSkill, 1000);
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

        <p>I currently develop with React.js, Node.js, Babel, and Webpack with modern JavaScript, and am always looking for the next JS framework that will consume my attention.</p>

        <p>Here is a high level breakdown of my skills:</p>

        <ul className={this.props.styles.skills}>
          <li><p>Web Development - Full-Stack JavaScript</p></li>
          <li><p>Front-End Development - HTML, CSS, JavaScript</p></li>
          <li><p>UX/UI Design</p></li>
          <li><p>Mobile & Responsive Development</p></li>
        </ul>
      </div>
    );
  }
}

CopyBlock.propTypes = {
  styles: PropTypes.object.isRequired
};

export default CopyBlock;
