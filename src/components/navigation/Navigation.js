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

  handleIndexLink(icon, key) {
    return (
      <li key={key}>
        <IndexLink
          to={icon.routerPath}
          activeClassName={css.active}>
          <FontAwesomeIcon faClass={icon.faClass} />
          <p>{icon.text}</p>
        </IndexLink>
      </li>
    );
  }

  handleRouterLink(icon, key) {
    return (
      <li key={key}>
        <Link
          to={icon.routerPath}
          activeClassName={css.active}>
          <FontAwesomeIcon faClass={icon.faClass} />
          <p>{icon.text}</p>
        </Link>
      </li>
    );
  }

  render() {
    return(
      <nav className={css.navigation}>
        <ul>
          {icons.map( (icon, key) => key === 0 ?
            this.handleIndexLink(icon, key) :
            this.handleRouterLink(icon, key)
          )}
        </ul>
      </nav>
    );
  }
}

export default Navigation;

Navigation.propTypes = {
  css: React.PropTypes.object
};
