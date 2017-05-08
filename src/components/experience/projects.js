const projects = [
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
    title: 'General Assembly Admissions Processing',
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
  },
  {
    title: 'Blogging',
    link: 'http://www.stacykeibler.com/guest-post-5-ways-to-make-your-kids-bulletproof/',
    technologies: ['Writing', 'Blogging', 'Copyediting', 'Research'],
    description: 'A guest post for Stacy Keibler’s blog offering advice to parents on how to support a healthy, Bulletproof lifestyle for their kids.',
    noFollow: false,
    inDevelopment: false,
    github: {
      repo: false
    },
    img: {
      path: require('../../assets/bulletproof_kids.png'),
      alt: 'Child eating healthy food'
    }
  }
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
  // },
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
