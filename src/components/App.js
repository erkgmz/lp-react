import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';

import '../stylesheets/components/_App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App container">
        <Header />
        {this.props.children}
        <Navigation
          listClass="col-xs-12"
          itemClass="col-xs-3"
          linkClass=""
          linkOnClick={this.showNav}
        />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
