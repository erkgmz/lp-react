import React from 'react';
import {Link} from 'react-router';

const skillsSequence = () => {
  // an array of strings that contain my skills.
  // we should iterate this array and re-render

  return 'skills';
};

const CopyBlock = () => {
  return (
    <div>
      <p>
        That includes Reactjs, Nodejs, Webpack and many other useful tools.
      </p>
      <p>
        I am a self taught web developer and General Assembly WDI alumni. I've worked for both big and small companies
        and have several years experience in the web development industry.
      </p>
      <div>
        <p>I am currently freelancing and offer these services:</p>
        <ul>
          <li>
            <p>Front-End JavaScript Development</p>
          </li>
          <li>
            <p>Back-End Nodejs Development</p>
          </li>
          <li>
            <p>Mobile App Development (iOS, Android)</p>
          </li>
        </ul>
        <p>I particularly enjoy working on React.js and React Native projects.</p>
      </div>
      <p>
        <Link to="/contact">Send me a message</Link> or connect with me on social!
      </p>
    </div>
  );
};

export default CopyBlock;
