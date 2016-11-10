import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = () => {
  return (
    <ul>
      <NavigationItem
        text="HOME"
        pageUri="/"
        logo="#" />

      <NavigationItem
        text="WORK"
        pageUri="/work"
        logo="#" />

      <NavigationItem
        text="CONTACT"
        pageUri="/contact"
        logo="#" />
    </ul>
  );
};

export default NavigationItems;
