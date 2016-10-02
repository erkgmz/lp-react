import React from 'react';
import Image from '../common/Image.js';

const MOBILE_IMAGE = require('./images/mobileHeadshot.png');
const DESKTOP_IMAGE = require('./images/erikGomezHeadshot.png');

import '../../stylesheets/components/_AboutPage.scss';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage">
        <Image src={MOBILE_IMAGE} />
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

export default AboutPage;
