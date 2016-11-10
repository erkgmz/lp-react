import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './navigation/Navigation';

/***************
TODO: Check to make sure form data is sending correctly before
removing dead code: .components/, .routes.js
****************/

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Navigation />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
