import React, {PropTypes, Component} from 'react';

class Iterate extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentSkill: this.props.list[0],
      skillIndex: 0
    };

    this.iterateSkill = this.iterateSkill.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentWillMount() {
    let intervalId = setInterval(this.iterateSkill, 1200);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateIndex() {
    let {skillIndex} = this.state;
    skillIndex++;

    // start over
    // if(skillIndex >= skills.length) {
    //   skillIndex = 0;
    // }

    // stop at the end
    if(skillIndex === this.props.list.length) {
      skillIndex = this.props.list.length;
      clearInterval(this.state.intervalId);
    }

    this.setState({ skillIndex });
  }

  iterateSkill() {
    let {skillIndex} = this.state;
    let currentSkill = this.props.list[skillIndex];

    this.updateIndex();

    this.setState({ currentSkill });
  }

  render() {
    return (
      <h2 className={this.props.textColor}>
        {this.state.currentSkill}
      </h2>
    );
  }
}

Iterate.propTypes = {
  list: PropTypes.array.isRequired,
  textColor: PropTypes.string
};

export default Iterate;
