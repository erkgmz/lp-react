import React, {PropTypes} from 'react';

const List = ({listClass, items}) => {
  return (
    <ul className={listClass}>
      {
        items.map((item, key) => {
          return (
            <li key={key}>
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
  listClass: PropTypes.string
};

export default List;
