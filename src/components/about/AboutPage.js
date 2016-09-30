import React from 'react';
import Image from '../common/Image.js';

const IMAGE = require('./images/erikGomezHeadshot.jpg');

import '../../../styles/AboutPage.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage col-xs-6">
        <Image src={IMAGE} />
        <h1>About</h1>
      </div>
    );
  }
}

export default AboutPage;
