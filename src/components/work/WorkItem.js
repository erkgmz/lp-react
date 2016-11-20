import React from 'react';

const WorkItem = ({ title, img, link, alt }) => {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={img}
          alt={alt} />
        <p>{title}</p>
      </a>
    </li>
  );
};

WorkItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string
};

export default WorkItem;
