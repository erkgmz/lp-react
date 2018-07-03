import React from 'react';
import Headline from '../common/Headline';
import Form from './Form';
import css from '../../css/sass/components/_contact.scss'; // eslint-disable-line

const ContactPage = () => {
  return (
    <article className={css.contact}>
      <div className={css.copyblock}>
        <Headline text="LET'S CHAT"/>
        <p>I'm happy to answer any questions you have and would love to hear
        about your next project. Just tell me about it and I'll be in touch.</p>
      </div>
      <div className={css.formWrap}>
        <Form />
      </div>
    </article>
  );
};

export default ContactPage;
