import React, {PropTypes} from 'react';
import Navigation from './Navigation';
import Image from './Image';
import Hamburger from './Hamburger';

import '../../stylesheets/components/_Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    };

    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    this.setState({showNav: this.state.showNav ? false : true});
  }

  render() {
    return (
      <div className="Header row">
        <div className="col-xs-12">
          <h2 className="col-xs-10">Erik Gomez</h2>
          <a
            className="col-xs-2"
            onClick={this.showNav}>
            <Hamburger />
          </a>
        </div>

        {this.state.showNav &&
          <Navigation
            listClass="header-nav col-xs-12"
            itemClass="col-xs-12"
            linkClass=""
            linkOnClick={this.showNav}
          />
        }
      </div>
    );
  }
}

export default Header;
