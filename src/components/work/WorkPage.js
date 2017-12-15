import React, {Component} from 'react';
import {Link} from 'react-router';
import Headline from '../common/Headline';
import PrimaryCTA from '../common/PrimaryCTA';
import Tile from './Tile';
import {projectsList} from './projects-list';
import css from '../../css/sass/components/_workpage.scss'; // eslint-disable-line

class WorkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {tiles: null};
  }

  componentWillMount() {
    let tiles = projectsList.map( (project, key) => <Tile css={css} project={project} key={key} /> );
    this.setState({tiles});
  }

  render() {
    return (
      <article className={css.workpage}>
        <div className={css.copyBlock}>
          <Headline text="MY WORK IS MY PASSION" />
          <p>As a full-time Front-End Developer, I work on the Shopify platform with a team  of creative and engineering geniuses that take a project from concept to launch.</p>
          <p>As I freelancer, I help clients with different creative and development needs, including:</p>
          <ul>
            <li><b>UX Design</b></li>
            <li><b>Responsive Emails</b> (design & development)</li>
            <li><b>Front-End Development</b> (HTML, CSS, JavaScript)</li>
          </ul>
          <div className={css.ctaWrap}>
            <PrimaryCTA path="/contact" text="SEND A MESSAGE" />
          </div>
        </div>
        <div className={css.tiles}>
          {this.state.tiles}
        </div>
      </article>
    );
  }
}

export default WorkPage;
