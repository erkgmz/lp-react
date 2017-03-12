import React, {PropTypes} from 'react';

import Byline from '../common/Byline';

const Techs = props => {
  return (
    <section className={props.style.techContainer}>
      <div className={props.style.techWrapper}>
        <div>
          <Byline text="Development Skills" />
          <ul className={props.style.coreLanguages}>
            <li><p>HTML, CSS, JavaScript</p></li>
            <li><p>React.js</p></li>
            <li><p>MongoDB</p></li>
            <li><p>Node.js + Express</p></li>
            <li><p>Mobile & Responsive Design</p></li>
          </ul>
        </div>

        <div>
          <Byline text="Marketing Skills" />
          <ul className={props.style.frameworks}>
            <li><p>SEO</p></li>
            <li><p>Social Media</p></li>
            <li><p>Google Analytics</p></li>
            <li><p>Promotions</p></li>
            <li><p>Marketing Strategy</p></li>
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
