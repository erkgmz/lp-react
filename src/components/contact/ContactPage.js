/* eslint-disable no-console */
import React from 'react';

// I would consider loading the full jQuery library. If you link to jQuery on a CDN, loading times will be minuscule. - http://stackoverflow.com/questions/4132163/is-there-only-ajax-part-of-jquery
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

    // If all input fields are populated, run another check to validate email
    if( this.validateEmail(data.email) ) {
      return {data, valid: true};
    } else {
      return { valid: false, message: 'Please eneter a correct email.' };
    }
  }

  handleChange(event) {
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
      return console.log(`Data not valid: ${data.message}`);
    }
  }

  render() {
    return (
      <div className="Contact">

        <Highlighter text="CONTACT"/>

        <div>
          {/* Add refs to inputs  */}
          <Input
            onChange={this.handleChange}
            type="name"
            name="name"
            placeholder="Name" />

          <Input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email" />

          <TextArea
            onChange={this.handleChange} />

          <SocialIcons
            icons={icons} />

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
