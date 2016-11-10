import React from 'react';

const WorkItem = ({ name, thumb, linkToPage }) => {
  return (
    <li>
      <a href={linkToPage}>
        <img
          src={thumb}
          alt="Some string" />
        <h4>{name}</h4>
      </a>
    </li>
  );
};

WorkItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  thumb: React.PropTypes.string.isRequired,
  linkToPage: React.PropTypes.string.isRequired
};

export default WorkItem;
