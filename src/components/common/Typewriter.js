import React, {Component} from 'react';

class Typewriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,
      charIndex: 0,
      highlight: false,
      text: '',
      timerId: ''
    };

    this.type = this.type.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  pause() {
    clearTimeout(this.state.timerId);
    this.setState({
      timerId: setTimeout(() => this.setState({text: ''}, () => this.type()), this.props.pause)
    });
  }

  type() {
    let currentProject = this.props.projects[this.state.currentProject];
    this.setState({timerId: setTimeout(this.type.bind(this), this.props.typeSpeed)});

    if( this.state.currentProject === this.props.projects.length ) {
      this.setState({currentProject: 0}); // reset to beginning of list
    } else if( this.state.charIndex === currentProject.length ) {
      this.setState({
        currentProject: this.state.currentProject + 1,
        charIndex: 0,
        text: this.props.projects[this.state.currentProject],
        highlight: true
      }, () => this.pause());
    } else {
      this.setState({
        text: this.state.text + currentProject.charAt(this.state.charIndex),
        charIndex: this.state.charIndex + 1,
        highlight: false
      });
    }
  }

  render() {
    let styles = `${this.props.cssClass} ${this.state.highlight ? this.props.cssHighlight : 'no-highlight'}`;

    return(
      <h1 className={styles} style={{ animationDuration: `${this.props.cursorDurartion}s` }}>
        {this.state.text}
      </h1>
    );
  }
}

export default Typewriter;

Typewriter.propTypes = {
  projects: React.PropTypes.array,
  typeSpeed: React.PropTypes.number,
  pause: React.PropTypes.number,
  cursorDurartion: React.PropTypes.number,
  cssClass: React.PropTypes.string,
  cssHighlight: React.PropTypes.string
};
