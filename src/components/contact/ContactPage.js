import React from 'react';

import List from '../common/List';
import 'font-awesome/css/font-awesome.css';
// import '../../stylesheets/components/_ContactPage.scss';
// require('../../stylesheets/components/_ContactPage.scss')

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {txt: 'LINKEDIN', src: '#'},
        {txt: 'TWITTER', src: '#'},
        {txt: 'GITHUB', src: '#'}
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(1+1);
    // GET FORM DATA
    // SEND FORM DATA TO erikgomezco
  }

  render() {
    return (
      <div className="Contact">

        <h2>Contact</h2>

        <div className="clearfix"></div>

        {/* TODO: Componentize .form-group  */}
        <div className="form-group">
          <div className="col-xs-12">
            <input
              className="form-control"
              required
              type="text"
              placeholder="Name"
              id="name-input" />
          </div>

          <div className="col-xs-12">
            <input
              className="form-control"
              required
              type="text"
              placeholder="Email"
              id="email-input" />
          </div>

          <div className="form-group col-xs-12">
            <textarea
              placeholder="Message"
              required
              className="form-control"
              id="textarea-input"
              rows="4">
            </textarea>
          </div>

          {/* TODO: Componentize social badges  */}
          <a
            className="social-icon col-xs-1"
            id="linkedin"
            href="https://www.linkedin.com/in/erkgmz" >
            <i
              className=" fa fa-linkedin fa-2x"
              aria-hidden="true"></i>
          </a>

          <a
            className="social-icon col-xs-1"
            id="twitter"
            href="https://twitter.com/erikgomezco" >
            <i
              className=" fa fa-twitter fa-2x"
              aria-hidden="true"></i>
          </a>

          <a
            className="social-icon col-xs-1"
            id="github"
            href="https://github.com/erkgmz" >
            <i
              className=" fa fa-github fa-2x"
              aria-hidden="true"></i>
          </a>

          <a onClick={this.handleClick}>SUBMIT</a>
        </div>


      </div>
    );
  }
}

export default ContactPage;
