import React from 'react';
import NavigationItems from './NavigationItems';
import styleable from 'react-styleable';

import css from '../../css/sass/components/_navigation.scss';// eslint-disable-line

const Navigation = ({css}) => {
  return (
    <nav className={css.navigation}>
      <NavigationItems />
    </nav>
  );
};

export default styleable(css)(Navigation);

Navigation.propTypes = {
  css: React.PropTypes.object
};
