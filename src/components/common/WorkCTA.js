import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import css from '../../css/sass/components/_cta.scss'; // eslint-disable-line

const WorkCTA = props => {
  return (
    <Link
      to={props.path}
      className={css.workCta}>
      {props.text}
    </Link>
  );
};

WorkCTA.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default WorkCTA;
