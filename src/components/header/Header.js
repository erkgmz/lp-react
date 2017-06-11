import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import FontAwesomeIcon from '../common/FontAwesomeIcon';
import Navigation from '../Navigation/Navigation';
import css from '../../css/sass/components/_header.scss'; //eslint-disable-line

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  toggleNav() {
    let {show} = this.state;

    if(!show) {
      show = true;
    }

    this.setState({show});
  }

  hideNav() {
    let {show} = this.state;

    if(show) {
      show = false;
    }

    this.setState({show});
  }

  render() {
    return (
      <header className={css.header}>
        <h2 className={css.siteId}><Link to="/">Erik Gomez</Link></h2>
        <a className={css.bars} onClick={this.toggleNav}>
          <FontAwesomeIcon faClass="fa fa-bars" />
        </a>
        <Navigation show={this.state.show} hide={this.hideNav} />
      </header>
    );
  }
}

export default Header;
