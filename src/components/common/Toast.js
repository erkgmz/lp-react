import React, {PureComponent, PropTypes} from 'react';

import css from '../../css/sass/components/_toast.scss'; // eslint-disable-line

class Toast extends PureComponent {
  render() {
    return (
      <div className={`${css.toast}
                       ${this.props.statusBg ? css.success : css.error}
                       ${this.props.show ? css.show : ''}`}>
        <p>{this.props.toastMessage}</p>
      </div>
    );
  }
}

export default Toast;

Toast.propTypes = {
  statusBg: PropTypes.bool,
  show: PropTypes.bool,
  toastMessage: PropTypes.string
};
