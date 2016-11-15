import React from 'react';

import WorkItem from './WorkItem';

const courseWalkers = require('./portfolio_images/coursewalkers.png');
const createPurpose = require('./portfolio_images/createpurpose.png');
const generalAssembly = require('./portfolio_images/generalAssembly.png');
const personalPage = require('./portfolio_images/personalPage.png');

const WorkItems = () => {
  return (
    <ul>
      <WorkItem
        name="ERIKGOMEZ.CO"
        img={personalPage}
        link="https://erikgomez.co/" />

      <WorkItem
        name="GA ADMISSIONS"
        img={generalAssembly}
        link="https://ga-admissions.herokuapp.com/" />
      
      <WorkItem
        name="STUD FINDER"
        img={courseWalkers}
        link="http://course-walkers.herokuapp.com/" />

      </ul>
  );
};

export default WorkItems;
