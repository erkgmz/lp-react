import React, {Component} from 'react';

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}

// const Headline = ({ text }) => {
//   return (
//     <h1>{text}</h1>
//   );
// };

Headline.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Headline;
