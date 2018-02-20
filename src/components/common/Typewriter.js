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
    setTimeout(() => {
      this.setState({text: ''});
      this.type();
    }, this.props.pause);
  }

  type() {
    let currentProject = this.props.projects[this.state.currentProject];
    let timerId = setTimeout(this.type.bind(this), this.props.typeSpeed);
    this.setState({timerId});

    if( this.state.currentProject === this.props.projects.length ) {
      this.setState({currentProject: 0}); // reset to beginning of list
    } else if( this.state.charIndex === currentProject.length ) {
      // reset to beginning of string
      this.setState({
        // increment to next item
        currentProject: this.state.currentProject + 1,
        // reset to beginning of word
        charIndex: 0,
        // set to complete word before pause
        text: this.props.projects[this.state.currentProject],
        highlight: true
      });

      this.pause();
    } else {
      // increment index to point to next letter in current word
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
