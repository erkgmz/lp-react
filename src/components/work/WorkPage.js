import React from 'react';

import '../../stylesheets/components/_WorkPage.scss';

class WorkPage extends React.Component {
  render() {
    return (
      <div className="WorkPage">
        <h1>Here is my work</h1>
        <ul className="row">
          <li className="col-xs-6"></li>
          <li className="col-xs-6"></li>
          <li className="col-xs-6"></li>
          <li className="col-xs-6"></li>
        </ul>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

export default WorkPage;
