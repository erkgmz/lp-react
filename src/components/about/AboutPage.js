// DEPRECATED
import React from 'react';
import Image from '../common/Image.js';

const MOBILE_IMAGE = require('./images/mobileHeadshot.png');
const DESKTOP_IMAGE = require('./images/erikGomezHeadshot.png');

// import '../../stylesheets/components/_AboutPage.scss';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage">
        <div className="wrapper">
          <h2>Hello</h2>
          <Image
            src={MOBILE_IMAGE} />
          <p>

          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
