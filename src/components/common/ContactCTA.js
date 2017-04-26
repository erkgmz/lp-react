import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import css from '../../css/sass/components/_contactCta.scss'; // eslint-disable-line

const ContactCTA = props => {
  return (
    <Link
      to={props.path}
      className={css.contactCta}>
      {props.text}
    </Link>
  );
};

ContactCTA.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ContactCTA;
