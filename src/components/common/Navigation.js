import React from 'react';
import List from './List.js';

const Navigation = ({listClass, itemClass, linkClass, linkOnClick}) => {

  const ITEMS = [
    {txt: 'HOME', src: '/'},
    // {txt: 'ABOUT', src: '/about'},
    {txt: 'WORK', src: '/work'},
    {txt: 'CONTACT', src: '/contact'}
  ];

  return (
    <nav className="row">
      <List
        items={ITEMS}
        listClass={listClass}
        itemClass={itemClass}
        linkClass={linkClass}
        linkOnClick={linkOnClick}
      />
    </nav>
  );
};

Navigation.propTypes = {
  listClass: React.PropTypes.string,
  itemClass: React.PropTypes.string,
  linkClass: React.PropTypes.string,
  linkOnClick: React.PropTypes.bool
};

export default Navigation;
