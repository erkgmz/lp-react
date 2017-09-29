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
        <p>I'm here to help. Get in touch with me by sending a message or for a current copy of my resume <a href="/resume.pdf" target="_blank" rel="noopener noreferrer nofollow">click here</a>.</p>
        <SocialIcons />
      </div>

      <div>
        <Form />
      </div>
    </article>
  );
};

export default ContactPage;
