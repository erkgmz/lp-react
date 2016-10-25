import React from 'react';

const Input = ({ classes, onChange, type, name, placeholder, value, onClick, inputClass }) => {
  return (
    <div className={classes}>
      <input
        value={value}
        onChange={onChange}
        onClick={onClick}
        type={type}
        name={name}
        className={inputClass}
        placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  onChange: React.PropTypes.func,
  classes: React.PropTypes.string,
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onClick: React.PropTypes.func,
  inputClass: React.PropTypes.string
};

export default Input;
