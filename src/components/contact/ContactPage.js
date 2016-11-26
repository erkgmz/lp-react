import React from 'react';
import styleable from 'react-styleable';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';
import Form from './Form';

import css from '../../css/sass/components/_contact.scss'; // eslint-disable-line

const templateString =`Have a question? Great!
I want to hear from you.`;

const ContactPage = () => {
  return (
    <article className={css.contact}>
      <div className="col-left">
        <Headline text="CONTACT"/>
        <Byline text={templateString} />
        <SocialIcons />
      </div>
      <div className="col-right">
        <Form />
      </div>
    </article>
  );
};

export default styleable(css)(ContactPage);
