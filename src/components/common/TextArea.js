import React from 'react';

const TextArea = ({ onChange, classes }) => {
  return (
    <div className={classes}>
      <textarea
        placeholder="Message"
        // className="form-control"
        onChange={onChange}
        type="text"
        name="message"
        // id="textarea-input"
        required
        rows="4">
      </textarea>
    </div>
  );
};

TextArea.propTypes = {
  onChange: React.PropTypes.func,
  classes: React.PropTypes.string
};

export default TextArea;
