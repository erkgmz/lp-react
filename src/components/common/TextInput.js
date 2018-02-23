import React from 'react';

const TextInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <label htmlFor={name}>{label}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder} />
    </label>
  );
};

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
};

export default TextInput;
