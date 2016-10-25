import React from 'react';
import {Link} from 'react-router';

import Highlighter from '../common/Highlighter';
import WorkList from './WorkList';
import WorkItems from './WorkItems';

// import '../../stylesheets/components/_WorkPage.scss';

class WorkPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="WorkPage">
        <div className="wrapper">
          <Highlighter text="WORK" />
          <WorkList items={WorkItems} />
        </div>
      </div>
    );
  }
}

export default WorkPage;
