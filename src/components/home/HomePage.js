import React, {Component} from 'react';
import Headline from '../common/Headline';
import PrimaryCTA from '../common/PrimaryCTA';
import Typewriter from '../common/Typewriter';
import SocialIcons from '../socialIcons/SocialIcons';
import css from '../../css/sass/components/_homepage.scss'; // eslint-disable-line
// import { component } from 'react-router/lib/PropTypes';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isMounted: false,
      fadeClass: css.fadeIn,
      mountTypewriter: false
    };
  }

  componentWillMount() {
    let isMounted = true;
    setTimeout(() => {
      this.setState({isMounted}, () => this.mountTypewriter());
    }, 100);
  }

  mountTypewriter() {
    let mountTypewriter = true;
    this.setState({mountTypewriter});
  }

  render () {
    return (
      <article className={`${css.homepage} ${this.state.isMounted && this.state.fadeClass}`}>
        <div className={css.copyBlock}>
          <Headline text="Hi, I'm Erik - I design and build" />
          {this.state.mountTypewriter && <Typewriter projects={['Shopify Stores', 'Landing Pages', 'Sales Funnels', 'Email Templates']}
            typeSpeed={150} // typing rate (milliseconds)
            highlightDuration={1500}
            cursorDurartion={0.8} // cursor blink rate (milliseconds)
            cssClass={css.typewriter}
            cssHighlight={css.highlight}
          />}
        </div>
        <div className={css.ctaContainer}>
          <PrimaryCTA path="/contact" text="CONTACT" />
          <PrimaryCTA path="/work" text="VIEW PORTFOLIO" />
        </div>
        <div className={css.socialIcons}>
          <SocialIcons />
        </div>
      </article>
    );
  }
}

export default HomePage;

HomePage.propTypes = {
  css: React.PropTypes.object
};
