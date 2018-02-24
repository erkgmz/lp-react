import React from 'react';
import {Link} from 'react-router';
import PrimaryCTA from '../common/PrimaryCTA';

class Tile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hover: false,
      isMounted: false
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    console.log('do you even resize bro?');
    this.setState({tileIsScalable: window.innerWidth >= 768});
  }

  hoverOn() {
    this.setState({hover: true});
  }

  hoverOff() {
    this.setState({hover: false});
  }

  render() {
    return (
      <div className={this.props.css.projectWrap}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        onClick={this.hoverOn}
        style={{
          backgroundColor: this.props.project.tileBg,
          transform: this.state.hover && this.state.tileIsScalable ? 'scale(1.2)' : 'none',
          zIndex: this.state.hover && this.state.tileIsScalable ? '10' : '0'
        }}>
        <div className={this.props.css.overlay}
          style={{display: this.state.hover ? 'flex' : 'none'}}>
            {this.props.project.type !== 'cta' ? (
              <div className={this.props.css.overlayContent}>
                <h4>{this.props.project.title}</h4>
                <p>{this.props.project.type}</p>
              </div>
              ) : (
              <div className={this.props.css.overlayContent}>
                <h4>Available on request.</h4>
                <Link to="/contact">MESSAGE ME</Link>
              </div>
            )}
        </div>
        {this.props.project.asset_path ? (
          <img src={this.props.project.asset_path} />
          ) : (
          <div className={this.props.css.noAsset}>
            <p>{this.props.project.title}</p>
          </div>
        )}
      </div>
    );
  }
}

Tile.propTypes = {
  css: React.PropTypes.object.isRequired,
  project: React.PropTypes.object.isRequired,
  hover: React.PropTypes.bool
};

export default Tile;
