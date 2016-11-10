import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';
import Form from './Form';

const ContactPage = () => {
  return (
    <article>
      <Headline text="CONTACT ME"/>
      <Byline text="Have a question? Great! I want to hear from you." />
      <SocialIcons />
      <Form />
    </article>
  );
};

export default ContactPage;
