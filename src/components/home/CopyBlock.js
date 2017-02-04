import React, {Component} from 'react';
import {Link} from 'react-router';

import skills from './skills';

class CopyBlock extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentSkill: skills[0]
    };

    this.randomSkill = this.randomSkill.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
  }

  componentWillMount() {
    let intervalId = setInterval(this.randomSkill, 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  randomNumber() {
    let random = Math.floor(Math.random() * skills.length);
    return random;
  }

  randomSkill() {
    let rand = this.randomNumber();
    let skill = skills[rand];
    this.setState({ currentSkill: skill });
  }

  render() {
    return (
      <div>
        <p>That includes ReactJS, NodeJS, Webpack and many other useful tools like {this.state.currentSkill}.</p>

        <p>I am a self taught web developer and General Assembly WDI alumni. I've worked for both big and small companies
          and have several years experience in the web development industry.</p>

        <div>

          <p>I am currently freelancing and offer these services:</p>
          <ul>
            <li><p>Front-End JavaScript Development</p></li>
            <li><p>Back-End Nodejs Development</p></li>
            <li><p>Mobile App Development on iOS or Android</p></li>
          </ul>

          <p>I particularly enjoy working with React.js and React Native projects.</p>
        </div>

        <p><Link to="/contact">Send me a message</Link> or connect with me on social!</p>
      </div>
    );
  }
}

export default CopyBlock;
