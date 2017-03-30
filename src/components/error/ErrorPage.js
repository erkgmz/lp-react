import React from 'react';
import {Link} from 'react-router';

import style from '../../css/sass/components/_error.scss' //eslint-disable-line

const ErrorPage = () => {
  return (
    <article className={style.Error}>
      <h1>Oh No! Not Found</h1>
      <p>Try going <Link to="/">here</Link>.</p>
    </article>
  );
};

export default ErrorPage;
