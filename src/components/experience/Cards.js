import React, {Component, PropTypes} from 'react';

import FontAwesomeIcon from '../common/FontAwesomeIcon';
import Card from './Card';
import projects from './projects';

class Cards extends Component {
  constructor(props, context) {
    super(props, context);

    let i = 0;

    this.state = {
      index: i,
      card: projects[i],
      limit: projects.length
    };

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious(event) {
    event.preventDefault();
    let {index, limit} = this.state;

    if(index === 0) {
      index = limit - 1;
    } else {
      index--;
    }
    this.setState({index, card: projects[index]});
  }

  handleNext(event) {
    event.preventDefault();
    let {index, limit} = this.state;

    if(index === limit - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({index, card: projects[index]});
  }

  render() {
    return (
      <div className={this.props.styles.Cards}>
        <a onClick={this.handlePrevious}>
          <FontAwesomeIcon faClass={`fa fa-angle-left ${this.props.styles.faArrow}`} />
        </a>

        <Card image={this.state.card.img}
          title={this.state.card.title}
          description={this.state.card.description}
          link={this.state.card.link}
          linkText={this.state.card.linkText}
          tags={this.state.card.technologies}
          styles={this.props.styles}
          inDevelopment={this.state.card.inDevelopment}
          github={this.state.card.github} />

        <a onClick={this.handleNext} className={this.props.styles.alignRight}>
          <FontAwesomeIcon faClass={`fa fa-angle-right ${this.props.styles.faArrow}`} />
        </a>
      </div>
    );
  }
}

Cards.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Cards;
