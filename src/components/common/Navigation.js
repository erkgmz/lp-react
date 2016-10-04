import React from 'react';
import List from './List.js';

import '../../stylesheets/components/_Navigation.scss';

const ITEMS = [
  {txt: 'HOME', src: '/'},
  {txt: 'ABOUT', src: '/about'},
  {txt: 'WORK', src: '/work'},
  {txt: 'CONTACT', src: '/contact'}
];

const Navigation = ({listClass, itemClass, linkClass}) => {
  return (
    <nav>
      <List
        items={ITEMS}
        listClass={listClass}
        itemClass={itemClass}
        linkClass={linkClass} />
    </nav>
  );
};

Navigation.propTypes = {
  listClass: React.PropTypes.string,
  itemClass: React.PropTypes.string,
  linkClass: React.PropTypes.string
};

export default Navigation;
