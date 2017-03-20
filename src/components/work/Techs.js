import React, {PropTypes} from 'react';

import Byline from '../common/Byline';
import List from '../common/List';

import {development, marketing} from './projects';

const Techs = props => {
  return (
    <section className={props.style.techContainer}>
      <div className={props.style.techWrapper}>
        <div>
          <Byline text="Development Skills" />
          <List items={development} listClass={props.style.devSkills} />
        </div>

        <div>
          <Byline text="Marketing Skills" />
          <List items={marketing} listClass={props.style.marketingSkills} />
        </div>
      </div>
    </section>
  );
};

Techs.propTypes = {
  style: PropTypes.object.isRequired
};

export default Techs;
