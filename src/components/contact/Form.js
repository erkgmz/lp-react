/*eslint-disable no-console */
/*eslint-disable no-undef */
/* Need to disable no-undef because this component will use Toastr, Jquery CDN as API's */
 import React, {Component} from 'react';

import TextInput from '../common/TextInput';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      error: 'You cant leave name field empty.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  clearState() {
    this.setState({
      name: '',
      email: '',
      message: '',
      sending: false
    });
  }

  inputsAreValid() {
    let {name, email, message} = this.state;
    let user = {name, email, message};

    for(let key in user) {
      if(user[key] === '') {
        this.setState({error: `You cant leave ${key} field empty.`});
        return false;
      }
    }
    return true;
  }

  emailIsValid() {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let {email} = this.state;

    if( re.test(email) ) {
      return true;
    } else {
      this.setState({error: `Hmm, seems like '${email}' is not a valid email. Try again (example: youremail@website.com)`});
      return false;
    }
  }

  formIsValid() {
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
    // checking form validation in preperation for send
    this.formIsValid();
  }

  handleClick(event) {
    event.preventDefault();

    if( this.formIsValid() ){
      this.setState({sending: true});
      let {name, email, message} = this.state;
      let user = {name, email, message};
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: user,
        dataType: 'json',
        cache: false,
        success: function(response) {
          this.clearState();
          toastr.success('Your message has been sent.');
        }.bind(this),
        error: function(xhr, status, error) {
          this.clearState();
          toastr.error('Hmm, there was an error sending your message, try again.');
        }.bind(this)
      });
    } else {
      return toastr.error(this.state.error);
    }
  }

  render() {
    return (
      <form>
        <TextInput
          label="Name*:"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Ex: John Doe" />

        <TextInput
          label="Email*:"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Ex: johndoe@gmail.com" />

        <label htmlFor="message">
          Message*:
          <textarea
            type="text"
            name="message"
            rows="5"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="What is it? What are your goals? How can I help? Timeline and budget details are also appreciated.">
          </textarea>
        </label>

        <input
          type="submit"
          value={this.state.sending ? 'SENDING...' : 'SEND'}
          onClick={this.handleClick} />
      </form>
    );
  }
}

export default Form;
