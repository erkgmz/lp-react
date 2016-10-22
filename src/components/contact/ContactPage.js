import React from 'react';
import * as $ from 'jquery';
/* eslint-disable no-console */

import List from '../common/List';
import 'font-awesome/css/font-awesome.css';
// import '../../stylesheets/components/_ContactPage.scss';
// require('../../stylesheets/components/_ContactPage.scss')

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    $.ajax({
      type: 'POST',
      url: '/contact',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(response) {
        console.log('Success!');
        console.log(response);
      }.bind(this),
      error: function(xhr, status, error) {
        console.log('Error');
        console.log(error);
      }.bind(this)
    });
  }

  handleChange(event) {
    // TODO: Make this more programmatic
    if(event.target.name === 'name') {
      let name = event.target.value;
      this.setState({name: name});

    } else if(event.target.name === 'email') {
      let email = event.target.value;
      this.setState({email: email});

    } else {
      let message = event.target.value;
      this.setState({message: message});

    }
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
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              name="name"
              id="name-input" />
          </div>

          <div className="col-xs-12">
            <input
              className="form-control"
              required
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
              name="email"
              id="email-input" />
          </div>

          <div className="form-group col-xs-12">
            <textarea
              placeholder="Message"
              onChange={this.handleChange}
              required
              name="message"
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

          <input
            type="submit"
            value="SUBMIT"
            id="submit"
            onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
