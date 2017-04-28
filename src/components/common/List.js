import React, {PropTypes} from 'react';

const List = ({listClass, items, itemClass}) => {
  return (
    <ul className={listClass}>
      {items.map((item, key) => {
          return (
            <li className={itemClass} key={key}>
              <p>{item}</p>
            </li>
          );
        })
      }
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  listClass: PropTypes.string,
  itemClass: PropTypes.string
};

export default List;
