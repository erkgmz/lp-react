import React, {Component} from 'react';
import {Link} from 'react-router';
import Byline from '../common/Byline';
import SocialIcons from '../socialIcons/SocialIcons';

import skills from './skills';

class CopyBlock extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentSkill: skills[0],
      skillIndex: 0
    };

    this.iterateSkill = this.iterateSkill.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentWillMount() {
    let intervalId = setInterval(this.iterateSkill, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateIndex() {
    let {skillIndex} = this.state;
    skillIndex++;

    if(skillIndex >= skills.length) {
      skillIndex = 0;
    }

    this.setState({ skillIndex });
  }

  iterateSkill() {
    let {skillIndex} = this.state;
    let currentSkill = skills[skillIndex];

    this.updateIndex();

    this.setState({ currentSkill });
  }

  render() {
    return (
      <div className={this.props.containerStyle}>
        <Byline text="What I do" />
        <p>I build modern web and mobile applications with JavaScript and technologies like {this.state.currentSkill}</p>

        <p>If you have any questions or need digital services, I am currently available for:</p>
        <ul>
          <li><p>Web development</p></li>
          <li><p>User Experience Design (UX)</p></li>
          <li><p>Site audits & redesigns</p></li>
          <li><p>Search Engine Optimization (SEO)</p></li>
          <li><p>Mentorships for JavaScript newbies</p></li>
        </ul>

        <Byline text="A little more about me" />

        <p>I am passionate about learning, development and technology. I am a General Assembly alumni with a  GitHub history goes back to 2014 where I first began coding by making static sites with HTML and CSS. I began working for <a href="https://bulletproof.com">Bulletproof 360</a> in 2014 and got on-the-job experience in content marketing, search engine optimization, and front-end development. Then I discovered a passion for coding, JavaScript in particular. I know that's a clichè but I actually mean it and here's why: </p>

        <Byline text="I love to learn" />

        <p>Actually, learning is a life-long pursuit of mine and there is an abundance of opportunity to learn when working with JavaScript ;). In my pursuit, I've developed <a href="http://tim.blog/2016/10/06/the-art-and-science-of-learning-anything-faster/">meta-learning</a> and <a href="http://tim.blog/2013/05/20/accelerated-learning-techniques/">accelerated learning</a> techniques that I apply on a daily basis, and I am always looking for ways to improve.</p>

        <Byline text="General Assembly" />

        <p>I realized it was time to "level-up" my JavaScript skills, so in early 2016 I quit my job, completed a ton of tutorials on <a href="https://teamtreehouse.com/">TeamTreehouse</a>, and enrolled into <a href="https://generalassemb.ly/education/web-development-immersive">General Assembly's WDI</a> (Web Development Immersive). The experience was intense: 14 hours of coding, six days a week, for 12 weeks, and it has changed my life.</p>

        <p>Immediately after graduating, I was selected for an internship as a software engineer at <a href="https://www.razorfish.com/">Razorfish</a>. There, I worked on a team of engineers and had the opportunity to flex my front-end skills on a live website in production for a global automobile manufacturer.</p>

        <Byline text="What about now?" />

        <p>I am spending most of my time working on projects for clients and learning all the ins and outs of React.js.</p>

        <p>If I'm not making websites or learning something new, I can usually be found hanging out with friends or doing something with my wife, Kailey, our daughter, Leah, and our English Bulldog, Tito. My health and fitness are important to me so I work out a few times a week and love to spend time outdoors, hiking, and biking.</p>

        <p>I am a huge foodie! I love to try new recipes or unique foods, but I also appreciate a well put together meal, no matter how normal it is. The weirdest thing I've eaten to date are crickets (increasingly becoming less weird to eat, for some reason) and I am known to host a really good BBQ.</p>

        <Byline text="Want more info?" />
        <p><Link to="/contact">Send me a message</Link> or connect with me.</p>
        <div className={this.props.socialContainer}>
          <SocialIcons />
        </div>
      </div>
    );
  }
}

CopyBlock.propTypes = {
  socialContainer: React.PropTypes.object,
  containerStyle: React.PropTypes.object
};

export default CopyBlock;
