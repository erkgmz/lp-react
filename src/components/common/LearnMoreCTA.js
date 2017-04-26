import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import css from '../../css/sass/components/_cta.scss'; // eslint-disable-line

const LearnMoreCTA = props => {
  return (
    <Link
      to={props.path}
      className={css.learnCta}>
      {props.text}
    </Link>
  );
};

LearnMoreCTA.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default LearnMoreCTA;
