/* eslint-disable no-console */

import React from 'react';
import toastr from 'toastr';
import * as $ from 'jquery';

import List from '../common/List';
import SocialIcons from '../common/SocialIcons';
import icons from '../common/Icons';

import 'font-awesome/css/font-awesome.css';
// import '../../stylesheets/components/_ContactPage.scss';

/*
10/22
  TODO: Add form feedback so user is aware that message has been sent
  1. Make Input, Textarea components
  2. Import Link componenet handle making links
  3. Make social icon component



*/

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    toastr.options = {
      positionClass: "toast-top-full-width"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  validateData(data) {
    for(let key in data) {
      if(data[key] === '') {
        return {valid: false, missing: key};
      }
    }
    return {data, valid: true};
  }

  handleClick() {
    let data = this.validateData(this.state);

    if( data.valid ) {
      data = data.data;

      toastr.success(`Sending...`);

      $.ajax({
        type: 'POST',
        url: '/contact',
        data: data,
        dataType: 'json',
        cache: false,
        success: function(response) {
          toastr.clear();
          toastr.success('Your message has been sent.');
        }.bind(this),
        error: function(xhr, status, error) {
          toastr.error('Oops, Something went wrong. Try again later');
        }.bind(this)
      });
    } else {
      toastr.info(`Don't forget to enter your ${data.missing}`);
    }
  }

  handleChange(event) {
    // TODO: Make this more programmatic
    if(event.target.name === 'name') {
      let name = event.target.value;
      this.setState({name: name});

    }
    if(event.target.name === 'email') {
      let email = event.target.value;
      this.setState({email: email});

    } if(event.target.name === 'message') {
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
              type="text"
              name="message"
              className="form-control"
              id="textarea-input"
              rows="4">
            </textarea>
          </div>

          <SocialIcons icons={icons} />

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
