import React from 'react';

import WorkItem from './WorkItem';

const WorkItems = ({ projects }) => {
  return (
    <ul>
      {
        projects.map((project, key) => {
          return (
            <WorkItem
              key={key}
              title={project.title}
              img={project.img.path}
              alt={project.img.alt}
              link={project.link}
              noFollow={project.noFollow} />
          );
        })
      }
      </ul>
  );
};

export default WorkItems;

WorkItems.propTypes = {
  projects: React.PropTypes.array.isRequired
};
