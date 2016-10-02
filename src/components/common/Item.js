import React from 'react';
import {Link} from 'react-router';

const Item = ({item, itemClasses}) => {
  if(item.src) {
    return (
      <li className={itemClasses}>
        <Link to={item.src}>{item.txt}</Link>
      </li>
    );
  } else {
    return (
      <li className={itemClasses}>{item.txt}</li>
    );
  }
};

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  itemClasses: React.PropTypes.string.isRequired
};

export default Item;
