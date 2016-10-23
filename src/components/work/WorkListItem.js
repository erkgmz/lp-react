import React from 'react';
import { Link } from 'react-router';

const WorkListItem = ({ item }) => {

  return (
    <li className="col-xs-12">
      <h4>{item.name}</h4>
      {item.urls.map( (url, i) => {
        return (
          <p key={i}>
            <Link to={url.url}>{`View ${url.label}`}</Link>
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
