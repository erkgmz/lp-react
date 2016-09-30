import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.src = this.props.src;
  }

  render() {
    return (
      <img src={this.src} />
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string.isRequired
};

export default Image;
