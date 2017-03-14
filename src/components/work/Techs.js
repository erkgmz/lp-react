import React, {PropTypes} from 'react';

import Byline from '../common/Byline';

const Techs = props => {
  return (
    <section className={props.style.techContainer}>
      <div className={props.style.techWrapper}>
        <div>
          <Byline text="Development Skills" />
          <ul className={props.style.devSkills}>
            <li><p>HTML5, CSS3</p></li>
            <li><p>React.js</p></li>
            <li><p>Node.js</p></li>
            <li><p>Express.js</p></li>
            <li><p>JavaScript</p></li>
          </ul>
        </div>

        <div>
          <Byline text="Marketing Skills" />
          <ul className={props.style.marketingSkills}>
            <li><p>Digital Campaigns</p></li>
            <li><p>Social Media Advertising</p></li>
            <li><p>Strategic Planning</p></li>
            <li><p>Google Analytics</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Techs.propTypes = {
  style: PropTypes.object.isRequired
};

export default Techs;
