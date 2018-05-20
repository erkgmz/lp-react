import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import FontAwesomeIcon from '../common/FontAwesomeIcon';
import css from '../../css/sass/components/_navigation.scss'; //eslint-disable-line

const Navigation = ({ show, hide }) => {
  return (
    <div className={css.navPanel} style={{top: show ? 0 : '-100%'}}>
      <a className={css.faClose} onClick={hide}>
        <FontAwesomeIcon faClass="fa fa-times" />
      </a>
      <nav className={css.navContainer}>
        <ul className={css.navBlock}>
          <li>
            <h1>
              <IndexLink
                activeClassName={css.active}
                onClick={hide}
                to="/">
                Home
              </IndexLink>
            </h1>
          </li>
          <li className={css.pipe}><h1>|</h1></li>
          <li>
            <h1>
              <Link
                activeClassName={css.active}
                onClick={hide}
                to="/work">
                Work
              </Link>
            </h1>
          </li>
          <li className={css.pipe}><h1>|</h1></li>
          <li>
            <h1>
              <Link
                activeClassName={css.active}
                onClick={hide}
                to="/contact">
                Contact
              </Link>
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
};

export default Navigation;
