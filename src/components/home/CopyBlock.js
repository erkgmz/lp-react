import React, {Component} from 'react';
import {Link} from 'react-router';
import Byline from '../common/Byline';

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
      <div>
        <p>I build modern web and mobile applications with JavaScript and technologies like {this.state.currentSkill}</p>

        <div>
          <p>If you have any questions or need digital services, I am currently available for:</p>
          <ul>
            <li><p>Web / mobile app development</p></li>
            <li><p>UX / UI design and research</p></li>
            <li><p>Site audits and optimization</p></li>
          </ul>
        </div>
        <div>
          <Byline text="Questions?" />
          <p><Link to="/contact">Send me a message</Link> or connect with me on social.</p>
        </div>
      </div>
    );
  }
}

export default CopyBlock;
