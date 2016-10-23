import React from 'react';
import { Link } from 'react-router';

class WorkList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {items} = this.props;

    return (
      <ul className="row">
        {items.map( (item, i) => {
          return (
            <li key={i} className="col-xs-12">
              <h4>{item.name}</h4>
              {item.urls.map( (url, index) => {
                return (
                  <p key={index}>
                    <Link to={url.url}>{`View ${url.label}`}</Link>
                  </p>
                );
              })}
            </li>
          );
        })}
      </ul>
    );
  }
}

WorkList.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default WorkList;
