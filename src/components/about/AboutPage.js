import React from 'react';
import Image from '../common/Image.js';

const MOBILE_IMAGE = require('./images/mobileHeadshot.png');
const DESKTOP_IMAGE = require('./images/erikGomezHeadshot.png');

import '../../styles/about/AboutPage.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage">
        <Image src={MOBILE_IMAGE} />
        <h1>About</h1>
      </div>
    );
  }
}
// sass AboutPage.scss:AboutPage.css --watch
export default AboutPage;
