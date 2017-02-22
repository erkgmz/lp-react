import React from 'react';

const WorkItem = ({ title, img, link, alt, noFollow }) => {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel={noFollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}>
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
  alt: React.PropTypes.string,
  noFollow: React.PropTypes.bool
};

export default WorkItem;
