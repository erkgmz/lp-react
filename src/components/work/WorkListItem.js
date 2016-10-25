import React from 'react';
import { Link } from 'react-router';

const WorkListItem = ({ item }) => {

  return (
    <li>
      <h4>{item.name}</h4>
      {item.urls.map( (url, i) => {
        return (
          <p key={i}>
            <a
              href={url.url}
              target="_blank"
              rel="noopener noreferrer">
              {url.label}
            </a>
          </p>
        );
      })}
    </li>
  );
};

WorkListItem.propTypes = {
  item: React.PropTypes.object
};

export default WorkListItem;
