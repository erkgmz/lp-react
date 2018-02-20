import React from 'react';
import Headline from '../common/Headline';
import SocialIcons from '../socialIcons/SocialIcons';
import Form from './Form';
import css from '../../css/sass/components/_contact.scss'; // eslint-disable-line

const ContactPage = () => {
  return (
    <article className={css.contact}>
      <div>
        <Headline text="Contact."/>
        <p>I am currently <span style={{color: '#29FD2F', fontWeight: 800}}>AVAILABLE</span></p>
        <p>I would love to hear about your project. Please take a few minutes to tell me a little bit about it and I'll be in touch.</p>
      </div>
      <div>
        <Form />
      </div>
    </article>
  );
};

export default ContactPage;
