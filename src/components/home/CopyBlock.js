import React, {Component} from 'react';
import {Link} from 'react-router';

const skills = [
  'Babel',
  'ES2015 / ES6',
  'React Native',
  'Express',
  'Angular JS',
  'Mongoose JS',
  'Responsive Web Design',
  'Sketch',
  'UI design',
  'UX design',
  'Handlebars JS',
  'JQuery',
  'SASS',
  'Git',
  'Unit Testing',
  'Continous Integration (CI)',
  'Advanced CSS',
  'Bootstrap',
  'React',
  'Webpack',
  'Node JS',
  'CSS Flexbox',
  'Wordpress',
  'Mocha',
  'ES2016 / ES7'
];

class CopyBlock extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      skill: skills[0]
    };

    this.setRandomSkill = this.setRandomSkill.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
  }

  randomNumber() {
    let random = Math.floor(Math.random() * skills.length);
    return random;
  }

  setRandomSkill() {
    this.setState({skill: skills[this.randomNumber()]});
    // Still working on skills sequence
    // probably need to integrate componentWillMount()
    // current behavior seems to be snowballing the sequence
    // example: it seems to add several string in state
    // and doubles everytime it sets state
  }

  render() {
    return (
      <div>
        <p>That includes ReactJS, NodeJS, Webpack and many other useful tools like {this.state.skill}</p>

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
