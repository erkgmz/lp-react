import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import css from '../../css/sass/components/_primarycta.scss'; // eslint-disable-line

const PrimaryCTA = props => {
  return (
    <Link
      to={props.path}
      className={css.primarycta}>
      {props.text}
    </Link>
  );
};

PrimaryCTA.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default PrimaryCTA;
