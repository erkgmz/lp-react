import React, {PropTypes} from 'react';

import Item from './Item.js';

const List = ({items, itemClass, listClass, linkClass}) => {
  return (
    <ul className={listClass}>
      {items.map((item, i) => {
        return (
          <Item
            item={item}
            linkClass={linkClass}
            itemClass={itemClass}
            key={i} />
        );
      })}
    </ul>
  );
};

List.propTypes = {
  items: React.PropTypes.array,
  listClass: React.PropTypes.string,
  itemClass: React.PropTypes.string,
  linkClass: React.PropTypes.string
};

export default List;
