import React from 'react';
import List from './List.js';

import '../../stylesheets/components/_Navigation.scss';

const ITEMS = [
  {txt: 'HOME', src: '/'},
  {txt: 'ABOUT', src: '/about'},
  {txt: 'WORK', src: '/work'},
  {txt: 'CONTACT', src: '/contact'}
];

const Navigation = () => {
  return (
    <nav>
      <List
        items={ITEMS}
        itemClasses="col-xs-12"
        listClass="Navigation row" />
    </nav>
  );
};

export default Navigation;
