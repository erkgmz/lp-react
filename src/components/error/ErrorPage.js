import React from 'react';
import {Link} from 'react-router';

const ErrorPage = () => {
  return (
    <article>
      <h1>NOT FOUND!</h1>
      <p>Try going <Link to="/">here</Link>.</p>
    </article>
  );
};

export default ErrorPage;
