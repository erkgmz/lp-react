import React from 'react';
import Header from '../common/Header';

import '../../stylesheets/components/_HomePage.scss';

const HomePage = () => {
  return (
    <div className="homePage text-center">
      <h1>WEB DEVELOPER</h1>
      <h2>Erik Gomez</h2>
      <p>
        As the headlines above imply, my name is Erik and I'm a web developer in Bakersfield, CA.
        I'm a front-end developer, which basically means I know how to do cool things with HTML, CSS, and JavaScript.
        I have primarily made projects using Angularjs but have recently switched to Reactjs and I have been loving it!
      </p>
    </div>
  );
};

export default HomePage;
