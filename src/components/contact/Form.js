import React, {Component} from 'react';
import * as $ from 'jquery';

import TextInput from '../common/TextInput';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      error: 'Please enter your name.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.allFieldsAreValid = this.allFieldsAreValid.bind(this);
  }

  inputsAreValid() {
    let {name, email, message} = this.state;
    let user = {name, email, message};

    for(let key in user) {
      if(this.state[key] === '') {
        this.setState({error: `You need to enter your ${key}`});
        return false;
      }
    }
    return true;
  }

  emailIsValid() {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(this.state.email) ) {
      return true;
    } else {
      this.setState({error: 'Check your email'});
      return false;
    }
  }

  allFieldsAreValid() {
    if( this.inputsAreValid() && this.emailIsValid() ) {
    return true;
    } else {
      return false;
    }
  }

  handleChange(event) {
    if(event.target.name === 'name') {
      this.setState({name: event.target.value});
    }
    if(event.target.name === 'email') {
      this.setState({email: event.target.value});
    }
    if(event.target.name === 'message') {
      this.setState({message: event.target.value});
    }

    this.allFieldsAreValid();
  }

  handleClick(event) {
    event.preventDefault();
    if( this.allFieldsAreValid() ){
      let {name, email, message} = this.state;
      let user = {name, email, message};
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: user,
        dataType: 'json',
        cache: false,
        success: function(response) {
          console.log(response);
        }.bind(this),
        error: function(xhr, status, error) {
          console.error(error);
        }.bind(this)
      });
    } else {
      return alert(this.state.error);
    }
  }

  render() {
    return (
      <form>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange} />

        <label htmlFor="message">Message
          <textarea
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}>
          </textarea>
        </label>

        <input
          type="submit"
          value="Send"
          onClick={this.handleClick} />
      </form>
    );
  }
}

export default Form;
