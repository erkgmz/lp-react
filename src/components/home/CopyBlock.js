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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.skillIndex >= this.state.skillIndex) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateIndex() {
    let {skillIndex} = this.state;
    skillIndex++;

    if(skillIndex >= skills.length) {
      skillIndex = 0;
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
        <Byline text="What I do" />
        <p>I build modern, responsive web applications with JavaScript and technologies like {this.state.currentSkill}.</p>

        <p>If you have any questions or need digital services, I am currently available for:</p>
        <ul className={this.props.styles.skills}>
          <li><p>Web development</p></li>
          <li><p>UX Design (UX)</p></li>
          <li><p>Site audits & redesigns</p></li>
          <li><p>Search Engine Optimization (SEO)</p></li>
          <li><p>JavaScript Mentoring</p></li>
        </ul>
      </div>
    );
  }
}

CopyBlock.propTypes = {
  styles: PropTypes.object.isRequired
};

export default CopyBlock;
