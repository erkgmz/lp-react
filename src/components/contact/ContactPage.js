import React from 'react';

import List from '../common/List';

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
  }

  render() {
    return (
      <div className="Contact row">
        <h1>Here is my contact information</h1>

        <List
          items={this.state.items}
          itemClasses="col-xs-12"
          listClass="contact-nav" />

        <div className="form-group row">
          <div className="col-xs-6">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              id="name-input" />
          </div>

          <div className="col-xs-6">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              id="email-input" />
          </div>
        </div>

        <div className="form-group">
            <textarea
              placeholder="Message"
              className="form-control"
              id="textarea-input"
              rows="4">
            </textarea>
        </div>

      </div>
    );
  }
}

export default ContactPage;
