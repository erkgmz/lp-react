import React, {PropTypes} from 'react';

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
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string,
  noFollow: PropTypes.bool
};

export default WorkItem;
