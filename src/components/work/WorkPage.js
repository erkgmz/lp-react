import React from 'react';
import {Link} from 'react-router';

import Highlighter from '../common/Highlighter';

import '../../stylesheets/components/_WorkPage.scss';

class WorkPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      // TODO: Componentize... WorkList?
      <div className="WorkPage">
        <div className="wrapper">
          <Highlighter text="WORK" />
          <ul className="row">
            <li className="col-xs-12">
              <h4>Pillars</h4>
              <p>
                <Link to="https://theproject.com">View project</Link>
              </p>
              <p>
                <Link to="https://theproject.com">View project on GitHub</Link>
              </p>
            </li>
            <li className="col-xs-12">
              <h4>Create Purpose</h4>
              <p>
                <Link to="https://theproject.com">View project</Link>
              </p>
            </li>
            <li className="col-xs-12">
              <h4>GA Admissions</h4>
              <p>
                <Link to="https://theproject.com">View project</Link>
              </p>
              <p>
                <Link to="https://theproject.com">View project on GitHub</Link>
              </p>
            </li>
            <li className="col-xs-12">
              <h4>Stud Finder</h4>
              <p>
                <Link to="https://theproject.com">View project</Link>
              </p>
              <p>
                <Link to="https://theproject.com">View project on GitHub</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WorkPage;
