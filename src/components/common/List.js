import React, {PropTypes} from 'react';

import Item from './Item.js';

const List = ({items, itemClasses, listClass}) => {
  return (
    <ul className={listClass}>
      {items.map((item, i) => {
        return <Item item={item} itemClasses={itemClasses} key={i} />;
      })}
    </ul>
  );
};

List.propTypes = {
  items: React.PropTypes.array,
  listClass: React.PropTypes.string,
  itemClasses: React.PropTypes.string
};

export default List;
