import React, {PropTypes} from 'react';

// this componenet will need to be refactored
// for a more elegant solution that will handle the iterator.
  // iterator should probably be a completely different componenent
  // inline styles need to be removed
  // Byline should be a dumb/logic-less component

const Byline = ({ text, iterator }) => {
  if(iterator) {
    return (
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        <h2 style={{whiteSpace: "nowrap"}}>{text}</h2>
        &nbsp;
        <h2 style={{color: "rgba(255, 255, 255, 0.5)"}}>{" | "}</h2>
        &nbsp;
        <h2 style={{color: "rgba(255, 255, 255, 0.5)"}}>{iterator}</h2>
      </div>
    );
  } else {
    return (<h2>{text}</h2>);
  }
};

Byline.propTypes = {
  text: PropTypes.string.isRequired,
  iterator: PropTypes.string
};

export default Byline;
