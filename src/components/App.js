import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Navigation from './common/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
