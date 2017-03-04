import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styleable from 'react-styleable';

import css from '../../css/sass/components/_contactCta.scss'; // eslint-disable-line

const ContactCTA = props => {
  return (
    <p className={css.ctaContainer}>
      <Link
        to={props.path}
        className={css.contactCta}>
        {props.text}
      </Link>
    </p>
  );
};

ContactCTA.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ContactCTA;
