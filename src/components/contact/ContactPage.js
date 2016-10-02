import React from 'react';

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Here is my contact information</h1>
        <ul>
          <li><a>LINKEDIN</a></li>
          <li><a>TWITTER</a></li>
          <li><a>GITHUB</a></li>
        </ul>

        <form>
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="email" />
          <textarea></textarea>
        </form>
      </div>
    );
  }
}

export default ContactPage;
