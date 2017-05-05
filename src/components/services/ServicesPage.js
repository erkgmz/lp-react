// For mobile views. Similar to ../home/CopyBlock
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import Headline from '../common/Headline';
import Byline from '../common/Byline';
import CopyBlock from '../common/CopyBlock';
import SocialIcons from '../socialIcons/SocialIcons';
import List from '../common/List';
import Iterate from '../common/Iterate';
import ContactCTA from '../common/ContactCTA';

import css from '../../css/sass/components/_servicespage.scss'; // eslint-disable-line

const ServicesPage = () => {
  return (
    <article className={css.servicespage}>
      <Headline text="In a Nutshell" />
      <CopyBlock styles={css} />
      <ContactCTA path="/contact" text="Hire Me" />
    </article>
  );
};

export default ServicesPage;
