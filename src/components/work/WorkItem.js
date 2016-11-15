import React from 'react';

const WorkItem = ({ name, img, link, altText }) => {
  return (
    <li>
      <a href={link}>
        <img
          src={img}
          alt={altText} />
        <p>{name}</p>
      </a>
    </li>
  );
};

WorkItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  altText: React.PropTypes.string
};

export default WorkItem;
