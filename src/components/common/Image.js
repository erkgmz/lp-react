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

// You can also use @2x, @3x, etc. suffix in the file name to provide images for different screen densities. For example, if you have the following file structure:
//
// .
// ├── button.js
// └── img
//     ├── check@2x.png
//     └── check@3x.png
// And button.js code contains
//
// <Image source={require('./img/check.png')} />
// Packager will bundle and serve the image corresponding to device's screen density, e.g. on iPhone 5s check@2x.png will be used, on Nexus 5 – check@3x.png. If there is no image matching the screen density, the closest best option will be selected.


export default Image;
