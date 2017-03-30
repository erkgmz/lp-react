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

        <p><img src={headshot} alt="Erik Gomez headshot" />I am passionate about learning, development, and technology. I first began developing static sites with HTML and CSS in 2014 and then began working with the <a href="https://bulletproof.com">Bulletproof 360</a> team.</p>

        <p>There, I was responsible for front-end development, search engine optimization, and data analysis for a blog that supported over a million visits per month. That’s when I discovered a passion for marketing and web development.</p>

        <p>I know that's a cliché but I mean it, and here's why:</p>

        <Byline text="Learning" />

        <p>I believe success in the future will depend on your ability to learn new things, so meta-learning is a topic I am very interested in.</p>

        <p>Actually, learning is a life-long pursuit of mine and the main reason I'm a developer. I've developed several new skills using <a href="http://tim.blog/2013/05/20/accelerated-learning-techniques/">accelerated learning</a> techniques and I am always looking for new challenges.</p>

        <Byline text="Web Development" />

        <p>In early 2016, I completed a web development course at General Assembly, and was immediately selected for an internship at <a href="https://www.razorfish.com/">Razorfish</a>.</p>

        <p>My experience as a software engineer at one of the world's largest interactive agencies had dramatic effects on my development skills.</p>

        <p>Not only did I learn how to write better code, but I also experienced firsthand how to work effectively on a team of engineers, designers, and project managers. I regularly collaborated with front-end and back-end engineers, UI and UX designers, and project managers on user stories, creative compositions, and deadlines.</p>

        <p>I enjoyed my time at Razorfish, the creative environment, and the fast paced nature of launching a product. My experience raised my appreciation for web architecture, UX and UI design, and cross-functional communication to new levels.</p>

        <Byline text="But, Enough About Work" />

        <p>I spend most of my time working on React.js and Node.js projects for clients or myself, but I'm also very active off of my laptop too.</p>

        <p>If I'm not making websites or learning something new, I can usually be found hanging out with friends or doing something with my wife Kailey, our daughter Leah, or my dog Tito. I work out a few times a week and regularly enjoy spending time outdoors, hiking, or biking.</p>

        <p>I also like to cook and experiment with different recipes, or make the one I'm currently obsessed with, but I also enjoy going out to grab a bite to eat. My favorite places are usually local "mom and pops."</p>

        <Byline text="What's Next?" />

        <blockquote>
          <p className={css.italics}>“Try not to become a man of success, but rather try to become a man of value.”</p>
          <p>- Albert Einstein</p>
        </blockquote>

        <p>Within the next year I plan to:</p>
        <ul>
          <li><p>Code, Learn, Repeat</p></li>
          <li><p>Read at least 10 books</p></li>
          <li><p>Go on my first snowboarding trip</p></li>
          <li><p>Learn how to play “Wish You Were Here” by Pink Floyd on the guitar</p></li>
          <li><p>Volunteer my web development services for a non-profit</p></li>
        </ul>
      </div>
    </article>
  );
};

export default AboutPage;
