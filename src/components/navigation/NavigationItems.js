import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = () => {
  return (
    <ul>
      <NavigationItem
        text="HOME"
        url="/"
        fontAwesome="fa fa-home" />

      <NavigationItem
        text="WORK"
        url="/work"
        fontAwesome="fa fa-briefcase" />

      <NavigationItem
        text="CONTACT"
        url="/contact"
        fontAwesome="fa fa-comments" />
    </ul>
  );
};

export default NavigationItems;
