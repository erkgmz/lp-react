import React, {PropTypes} from 'react';

import Byline from '../common/Byline';

const Techs = props => {
  return (
    <section className={props.style.techContainer}>
      <div className={props.style.techWrapper}>
        <div>
          <Byline text="Core Skills" />
          <ul className={props.style.coreLanguages}>
            <li><p>HTML5</p></li>
            <li><p>CSS3</p></li>
            <li><p>JavaScript</p></li>
            <li><p>Node.js</p></li>
            <li><p>Mobile & Responsive Design</p></li>
          </ul>
        </div>

        <div>
          <Byline text="Frameworks" />
          <ul className={props.style.frameworks}>
            <li><p>React.js</p></li>
            <li><p>Webpack</p></li>
            <li><p>MongoDB</p></li>
            <li><p>Express</p></li>
            <li><p>Bootstrap & Flexbox</p></li>
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
