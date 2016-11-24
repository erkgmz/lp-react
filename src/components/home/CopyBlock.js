import React from 'react';
import {Link} from 'react-router';

const CopyBlock = () => {
  return (
    <p>
      I live in sunny Bakersfield, California. I am a voracious consumer of information, entrepreneurial spirit
      and seasoned front-end developer. I frequently work with technologies like Angular.js and React.js for
      front-end projects and and Node.js+Express and Mongoose.js on backend projects.
      <br />
      <br />
      Want to work together? Got a question? Just <Link to="/contact">contact me</Link>.
    </p>
  );
};

export default CopyBlock;
