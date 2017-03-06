import React from 'react';

import Headline from '../common/Headline';
import Byline from '../common/Byline';

import css from '../../css/sass/components/_aboutpage.scss'; // eslint-disable-line

const headshot = require('../../assets/headshot.png');

const AboutPage = () => {
  return (
    <article
      className={css.about}>
      <div className={css.container}>
        <Headline text="All About Me" />

        <p><img src={headshot} alt="Erik Gomez headshot" /> I am passionate about learning, development, and technology. I am a General Assembly alumni with a  GitHub history that goes back to 2014 where I first began coding by making static sites with HTML and CSS. I began working for <a href="https://bulletproof.com">Bulletproof 360</a> in 2014 and got on-the-job experience in content marketing, search engine optimization, and a little front-end development. Then I discovered a passion for coding, JavaScript in particular. I know that's a clichè but I actually mean it and here's why:</p>

        <Byline text="I love to learn" />

        <p>Actually, learning is a life-long pursuit of mine and there is an abundance of opportunity to learn when working with JavaScript. In my pursuit, I've developed <a href="http://tim.blog/2016/10/06/the-art-and-science-of-learning-anything-faster/">meta-learning</a> and <a href="http://tim.blog/2013/05/20/accelerated-learning-techniques/">accelerated learning</a> techniques that I apply on a daily basis, and I am always looking for ways to improve.</p>

        <Byline text="General Assembly" />

        <p>I realized that in order to become the front-end developer I envisioned, I needed a greater challenge.</p>

        <p>In 2015 I did the unthinkable, quit a promising career, and enrolled in <a href="https://generalassemb.ly/education/web-development-immersive">General Assembly's Web Development Immersive</a>. The experience was intense: 14 hours of coding, six days a week, for 12 weeks, and it has changed my life.</p>

        <p>After graduating, I was selected for an internship as a software engineer at <a href="https://www.razorfish.com/">Razorfish</a>. There, I worked on a team of engineers and designers and had the opportunity to flex my front-end skills on a website in production for a global automobile manufacturer.</p>

        <Byline text="What about now?" />

        <p>I spend most of my time working on projects for clients and learning the ins and outs of React.js.</p>

        <p>If I'm not making websites or learning something new, I can usually be found hanging out with friends or doing something with my wife Kailey, our daughter Leah, or my dog Tito. I work out a few times a week and regularly enjoy spending time outdoors, hiking, or biking.</p>

        <p>I also like to cook and experiment with different recipes, or make the one I'm currently obsessed with, but I also enjoy going out to grab a bite to eat. My favorite places are usually local "mom and pops."</p>

      </div>
    </article>
  );
};

export default AboutPage;
