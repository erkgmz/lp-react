const PROJECTS = [
  {
    title: 'KS MARKETING SERVICES',
    link: 'https://goo.gl/XaPTjw',
    techs: ['React', 'CSS Modules', 'ES6'],
    noFollow: false,
    inDevelopment: true,
    img: {
      path: require('./portfolio_images/ksMarketing.png'),
      alt: 'team photo'
    }
  },
  {
    title: 'GA ADMISSIONS',
    link: 'https://ga-admissions.herokuapp.com/',
    techs: ['Mongo', 'Express', 'Angular.js', 'Node.js', 'Bootstrap'],
    noFollow: false,
    inDevelopment: false,
    img: {
      path: require('./portfolio_images/generalAssembly.png'),
      alt: 'General Assembly logo'
    }
  },
  {
    title: 'STUD FINDER',
    link: 'http://course-walkers.herokuapp.com/',
    techs: ['jQuery', 'Flexbox', 'Handlebars.js'],
    noFollow: false,
    inDevelopment: false,
    img: {
      path: require('./portfolio_images/coursewalkers.png'),
      alt: 'Course Walkers logo'
    }
  },
  {
    title: 'UNDER CONSTRUCTION',
    link: 'https://erkgmz.github.io/e-lp/',
    techs: ['Angular.js', 'SASS', 'Meterial UI'],
    noFollow: true,
    inDevelopment: false,
    img: {
      path: require('./portfolio_images/personalPage.png'),
      alt: 'cover image'
    }
  }
];

export default PROJECTS;
