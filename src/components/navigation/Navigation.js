import React from 'react';
import styleable from 'react-styleable';

import NavigationItem from './NavigationItem';
import icons from './icons';

import css from '../../css/sass/components/_navigation.scss';// eslint-disable-line

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul>
        {
          icons.map( (icon, key) => {
            return (
              <NavigationItem
                key={key}
                text={icon.text}
                url={icon.url}
                fontAwesome={icon.fontAwesomeClass} />
            );
          })
        }
      </ul>
    </nav>
  );
};

export default styleable(css)(Navigation);

Navigation.propTypes = {
  css: React.PropTypes.object
};
