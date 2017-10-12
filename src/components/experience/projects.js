const projects = [
  {
    title: 'Shopify',
    link: false,
    technologies: ['Shopify', 'Theme Development', 'UX', 'Ecommerce', 'Liquid Development'],
    description: 'Shopify is a leading ecommerce platform because it provides turn key end-to-end solutions. If you\'re interested in custom theme development and want to see an example of my work please contact me.',
    noFollow: false,
    inDevelopment: false,
    github: {
      repo: false
    },
    img: {
      path: require('../../assets/shopify-logo.jpg'),
      alt: 'Shopify logo'
    }
  },
  {
    title: 'Course Walkers',
    link: 'http://course-walkers.herokuapp.com/',
    technologies: ['jQuery', 'Handlebars.js', 'HTML5 Video', 'SMACSS', 'Flexbox'],
    description: 'A website built for a client offering horse riding lessons, training, and stud services.  Users can also view a horse’s ancestry and videos of them in action!',
    noFollow: false,
    inDevelopment: false,
    github: {
      repo: true,
      link: 'https://github.com/erkgmz/stud-finder'
    },
    img: {
      path: require('../../assets/course-walkers-logo.png'),
      alt: 'Course Walkers logo'
    }
  },
  {
    title: 'General Assembly',
    link: 'https://ga-admissions.herokuapp.com/',
    technologies: ['MongoDB', 'Express', 'Angular.js', 'Node.js', 'Bootstrap'],
    description: 'A MEAN stack web application designed to function as an application and screening system that makes it easier for the GA team to manage the admissions process for prospective students.',
    noFollow: false,
    inDevelopment: false,
    github: {
      repo: true,
      link: 'https://github.com/erkgmz/ga_admissions_app'
    },
    img: {
      path: require('../../assets/general-assembly-logo.png'),
      alt: 'General Assembly logo'
    }
  },
  {
    title: 'Create Purpose',
    link: 'https://createpurpose.org/',
    technologies: ['Wordpress', 'SEO', 'Google Analytics', 'Consulting'],
    description: 'I volunteered my services to help the Create Purpose team build their new website to further their mission of bringing STEM education and project-based learning to orphans in Mexico.',
    noFollow: false,
    inDevelopment: false,
    github: {
      repo: false
    },
    img: {
      path: require('../../assets/cp-logo.png'),
      alt: 'Create Purpose logo'
    }
  }
];

export default projects;
