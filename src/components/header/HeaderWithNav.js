import React, {Component} from 'react';
import {Link} from 'react-router';

import FontAwesomeIcon from '../common/FontAwesomeIcon';

import css from '../../css/sass/components/_headerWithNav.scss'; //eslint-disable-line

class HeaderWithNav extends Component {
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
        <a className={css.bars} onClick={this.toggleNav}><FontAwesomeIcon faClass="fa fa-bars" /></a>

        <div className={css.navPanel}
          style={{display: this.state.show ? 'block' : 'none'}}>
          <a className={css.faClose}
            onClick={this.hideNav}>
            <FontAwesomeIcon faClass="fa fa-times" />
          </a>
          <div className={css.navContainer}>
            <ul className={css.navBlock}>
              <li>
                <h1><Link onClick={this.hideNav} to="/">Home</Link></h1>
              </li>
              <li className={css.pipe}><h1>|</h1></li>
              <li>
                <h1><Link onClick={this.hideNav} to="/work">Experience</Link></h1>
              </li>
              <li className={css.pipe}><h1>|</h1></li>
              <li>
                <h1><Link onClick={this.hideNav} to="/contact">Contact</Link></h1>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderWithNav;
