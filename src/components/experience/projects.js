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
  // {
  //   title: 'Creative Writing',
  //   link: 'https://blog.bulletproof.com/tim-ferriss-injury-lyme-disease-filming-tim-ferriss-experiment-215/',
  //   technologies: ['Blog Writing', 'Copyediting', 'Research', 'List-icles', 'Ad Copy'],
  //   description: 'Along with coding, I also enjoy creative writing. From writing a full blog post to brainstorming a headline for an ad and everything in between, I do my research and follow the latest trends to develop compelling content.',
  //   writingProject: true,
  //   noFollow: false,
  //   inDevelopment: false,
  //   github: {
  //     repo: false
  //   },
  //   img: {
  //     path: require('../../assets/bulletproof_kids.png'),
  //     alt: 'Child eating healthy food'
  //   }
  // }
  // {
  //   title: 'KS Marketing',
  //   link: 'https://goo.gl/XaPTjw',
  //   technologies: ['React', 'Webpack', 'CSS Modules', 'ES6', 'Node', 'Sendgrid'],
  //   description: 'A fast and simple personal website for a professional client. This static site was deployed on Github Pages and uses SendGrid API and NodeJS to send messages.',
  //   noFollow: false,
  //   inDevelopment: true,
  //   github: {
  //     repo: true,
  //     link: 'https://github.com/erkgmz/kailey-lp'
  //   },
  //   img: {
  //     path: require('../../assets/ksMarketing.png'),
  //     alt: 'team photo'
  //   }
  // }
  // {
  //   title: 'Under Construction UI',
  //   link: 'https://erkgmz.github.io/e-lp/',
  //   technologies: ['Angular.js', 'SASS', 'Angular UI', 'Responsive', 'GH Pages'],
  //   description: 'A personal project for a placeholder, under construction page. This simple UI is built with modern technology and is responsive across different device screen sizes.',
  //   noFollow: true,
  //   inDevelopment: false,
  //   github: {
  //     repo: true,
  //     link: 'https://github.com/erkgmz/e-lp'
  //   },
  //   img: {
  //     path: require('../../assets/min-bgimage.png'),
  //     alt: 'cover image'
  //   }
  // }
];

export default projects;
