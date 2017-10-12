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
        <p>Need help? Getting in touch is easy.</p>
        <p>Just enter a little info about youself, a brief message with details about your project, and click send.</p>
        <p>I'll be in touch shortly after. <i>Resume available upon request.</i></p>
      </div>
      <div>
        <Form />
      </div>
    </article>
  );
};

export default ContactPage;
