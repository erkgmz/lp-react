/* eslint-disable no-console */
import React from 'react';
import * as $ from 'jquery';

import SocialIcons from '../common/SocialIcons';
import icons from '../common/Icons';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Highlighter from '../common/Highlighter';

// import '../../stylesheets/components/_ContactPage.scss';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateData(data) {
    console.log(data);
    for(let key in data) {
      if(data[key] === '') {
        return { valid: false, message: `Please enter your ${key}` };
      }
    }

    if( this.validateEmail(data.email) ) {
      return {data, valid: true};
    } else {
      return { valid: false, message: 'Please eneter a correct email.' };
    }
  }

  handleClick() {
    let data = this.validateData(this.state);

    if( data.valid ) {
      // :`(
      data = data.data;

      $.ajax({
        type: 'POST',
        url: '/contact',
        data: data,
        dataType: 'json',
        cache: false,
        success: function(response) {
          console.log('SUCCESS');
          console.log(response);
        }.bind(this),
        error: function(xhr, status, error) {
          console.log('FAIL');
          console.log(error);
        }.bind(this)
      });
    } else {
      return console.log(`Data not valid, see errors`);
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
    }
    if(event.target.name === 'message') {
      let message = event.target.value;
      this.setState({message: message});
    }
  }

  render() {
    return (
      <div className="Contact">

        <Highlighter text="CONTACT"/>

        <div>
          <Input
            onChange={this.handleChange}
            type="name"
            name="name"
            placeholder="Name"
          />

          <Input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />

          <TextArea
            onChange={this.handleChange} />

          <SocialIcons icons={icons} />

          <Input
            type="submit"
            value="SUBMIT"
            onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
