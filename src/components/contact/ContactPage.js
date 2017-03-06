import React from 'react';
import styleable from 'react-styleable';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';
import Form from './Form';

import css from '../../css/sass/components/_contact.scss'; // eslint-disable-line

const ContactPage = () => {
  return (
    <article className={css.contact}>
      <div className={css.leftCol}>
        <Headline text="Contact Me"/>
        <Byline text="Have a Question? Send Me a Message." />
        <SocialIcons />
      </div>

      <div className={css.rightCol}>
        <Form />
      </div>

    </article>
  );
};

export default styleable(css)(ContactPage);
