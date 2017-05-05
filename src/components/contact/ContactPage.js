import React from 'react';

import Headline from '../common/Headline';
import SocialIcons from '../socialIcons/SocialIcons';
import Form from './Form';

import css from '../../css/sass/components/_contact.scss'; // eslint-disable-line

const ContactPage = () => {
  return (
    <article className={css.contact}>
      <div>
        <Headline text="Contact"/>
        <p>I'm here to help. Get in touch with me by sending a message or check me out on the socials.</p>
        <SocialIcons />
      </div>

      <div>
        <Form />
      </div>
    </article>
  );
};

export default ContactPage;
