import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.src = this.props.src;
    this.classes = this.props.classes;
  }

  render() {
    return (
      <img src={this.src} className={this.classes} />
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  classes: React.PropTypes.string
};

export default Image;
