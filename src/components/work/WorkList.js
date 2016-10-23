import React from 'react';

import WorkListItem from './WorkListItem';

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
            <WorkListItem item={item} key={i} />
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
