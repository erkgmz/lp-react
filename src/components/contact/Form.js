/*eslint-disable no-console */
/*eslint-disable no-undef */
/* Need to disable no-undef because this component will use Toastr, Jquery CDN as API's */
import React, {Component} from 'react';
import TextInput from '../common/TextInput';
import Ajax from '../common/Ajax';
import Toast from '../common/Toast';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      _toastMissingField: 'name',
      _toastStatusBg: false, // true = success or false = error in Toast.js
      _toastShow: false,
      _toastDisplay: false,
      _toastResponseMessage: null,
      _toastFlashDuration: 2000
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.emptyInputs = this.emptyInputs.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.flashToast = this.flashToast.bind(this);
    this.ajax = new Ajax();
  }

  componentWillMount() {
    this.setState({
      _toastMessage: `Don't forget to add your ${this.state._toastMissingField}`,
      timerId: setInterval(() => {
        // Need to setInterval to check inputs in case autofill is used
        // @TODO: eliminate setInterval and handle autofill more elegantly
        this.inputsAreValid();
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  emptyInputs() {
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
        return this.setState({
          _toastMessage: `Don't forget to add your ${key}`,
          _toastStatusBg: false
        }, () => false);
      }

      if(key === 'email' && this.emailIsValid(user[key]) == false) {
        return this.setState({
          _toastMessage: `Don't forge to add your ${key}`,
          _toastStatusBg: false
        }, () => false);
      }
    }

    return true;
  }

  emailIsValid(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleChange(event) {
    if(event.target.name === 'name') {
      this.setState({
        name: event.target.value
      }, () => this.inputsAreValid());
    }

    if(event.target.name === 'email') {
      this.setState({
        email: event.target.value
      }, () => this.inputsAreValid());
    }

    if(event.target.name === 'message') {
      this.setState({
        message: event.target.value
      }, () => this.inputsAreValid());
    }

    // let currentProp = this.state[event.target.name];
    // this.setState({currentProp: event.target.value}, () => {
    //   this.inputsAreValid();
    // });
  }

  handleResponse(response) {
    let {statusCode} = JSON.parse(response);

    if(statusCode === 202) {
      this.setState({
        _toastMessage: 'Your message has been sent.'
      }, () => this.flashToast(this.emptyInputs));
    } else {
      this.setState({
        _toastMessage: 'Hmm, there was an error sending your message, try again.'
      }, () => this.flashToast(this.emptyInputs));
    }
  }

  flashToast(cb) {
    this.setState({_toastShow: true}, () => {
      setTimeout(() => {
        this.setState({
          _toastShow: false
        }, () => cb && cb());
      }, this.state._toastFlashDuration);
    });
  }

  handleClick(event) {
    event.preventDefault();

    if( this.inputsAreValid() ) {
      let {name, email, message} = this.state;
      let user = {name, email, message};
      this.setState({sending: true, _toastStatusBg: true}, () => { // _toastStatusBg should be set in hadleResponse (assumes success)
        this.ajax.post('/contact', user, this.handleResponse);
      });
    } else {
      this.flashToast();
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

        <Toast
          statusBg={this.state._toastStatusBg}
          show={this.state._toastShow}
          toastMessage={this.state._toastMessage} />
      </form>
    );
  }
}

export default Form;
