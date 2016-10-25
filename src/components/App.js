import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';

import '../../node_modules/font-awesome/css/font-awesome.css';
// import '../../node_modules/toastr/build/toastr.min.css';
// import '../stylesheets/components/_App.scss';

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
          listClass=""
          itemClass=""
          linkClass=""
        />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
