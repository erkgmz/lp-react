import React from 'react';
import {Link} from 'react-router';

const Item = ({item, itemClass, linkClass, linkOnClick}) => {
  if(item.src || linkClass) {
    return (
      <li className={itemClass}>
        <Link
          to={item.src}
          id={item.styleId}
          className={linkClass}
          onClick={linkOnClick}>
            {item.txt || item.logo}
        </Link>
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
  linkClass: React.PropTypes.string,
  linkOnClick: React.PropTypes.bool
};

export default Item;
