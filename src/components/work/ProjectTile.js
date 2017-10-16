import React from 'react';
import PrimaryCTA from '../common/PrimaryCTA';

class ProjectTile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hover: false
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
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
        onMouseLeave={this.hoverOff}>
        <div className={this.props.css.overlay}
          style={{display: this.state.hover ? 'flex' : 'none'}}>
            {this.props.project.type !== 'cta' ? (
              <div className={this.props.css.overlayContent}>
                <h3>{this.props.project.title}</h3>
                <p>{this.props.project.type}</p>
              </div>
            ) : (
              <div className={this.props.css.overlayContent}>
                <PrimaryCTA path="/contact" text={this.props.project.title} />
              </div>
            )}
        </div>
        <img src={this.props.project.asset_path} />
      </div>
    );
  }
}

ProjectTile.propTypes = {
  css: React.PropTypes.object.isRequired,
  project: React.PropTypes.object.isRequired,
  hover: React.PropTypes.bool
};

export default ProjectTile;

