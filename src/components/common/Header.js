import React, {PropTypes} from 'react';

import '../../stylesheets/components/_Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header row">
          <h1 className="col-xs-9">eg</h1>
          <h1 className="col-xs-3">eg</h1>
      </header>
    );
  }
}

export default Header;
