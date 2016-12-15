import React from 'react';
import styleable from 'react-styleable';
import {Link, IndexLink} from 'react-router';

import FontAwesomeIcon from '../common/FontAwesomeIcon';
import icons from './icons';

import css from '../../css/sass/components/_navigation.scss';// eslint-disable-line

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className={css.navigation}>
        <ul>
          {icons.map( (icon, key) => {
            if(key === 0) {
              return (
                <li key={key}>
                  <IndexLink
                    to={icon.routerPath}
                    activeClassName={css.active}>
                    <FontAwesomeIcon classes={icon.classes} />
                    <p>{icon.text}</p>
                  </IndexLink>
                </li>
              );
            } else {
              return (
                <li key={key}>
                  <Link
                    to={icon.routerPath}
                    activeClassName={css.active}>
                    <FontAwesomeIcon classes={icon.classes} />
                    <p>{icon.text}</p>
                  </Link>
                </li>
              );
            }
            })}
        </ul>
      </nav>
    );
  }
}

export default Navigation;

Navigation.propTypes = {
  css: React.PropTypes.object
};
