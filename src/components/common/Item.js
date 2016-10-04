import React from 'react';
import {Link} from 'react-router';

const Item = ({item, itemClass, linkClass}) => {
  if(item.src && linkClass) {
    return (
      // Redundant?
      <li className={itemClass}>
        <Link to={item.src} className={linkClass}>{item.txt}</Link>
      </li>
    );
  } else if(item.src) {
    return (
      <li className={itemClass}>
        <Link to={item.src}>{item.txt}</Link>
      </li>
    );
  } else {
    return (
      <li className={itemClass}>{item.txt}</li>
    );
  }
};

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  itemClass: React.PropTypes.string,
  linkClass: React.PropTypes.string
};

export default Item;
