const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'DS.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Daulat Singh',
    role: 'Web Developer',
    description:
      'A Full Stack Web Developer with a strong foundation in C, C++, Python, and JavaScript. I specialize in building responsive and dynamic web applications using ReactJS, Tailwind CSS, and Bootstrap on the frontend, while leveraging Node.js, Express, and RESTful APIs on the backend. I work comfortably with both MySQL and MongoDB, and use tools like Git, GitHub, and Postman to streamline development and testing. I enjoy solving real-world problems through clean, efficient code and am always eager to learn and adopt new technologies.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/daulat68',
      github: 'https://github.com/daulat68',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Game Listing Website',
      description:
        'It is a responsive React application that allows users to discover, search, and bookmark video games. It features authentication with Clerk, state management through Redux Toolkit, and data fetched from a RAWG API. Users can view detailed game information, browse screenshots, filter games by category or tag, and save their favorite games.',
      stack: ['React', 'Clerk Authentication', 'Redux'],
      sourceCode: 'https://github.com/daulat68/Game-Finder',
      livePreview: 'https://game-finderbydaulat.netlify.app/',
    },
    {
      name: 'Food App',
      description:
        'This is a food ordering application built using React and Parcel. It fetches restaurant data from an API and displays restaurant menus, categories, and food items. Users can check online status, log in/out, and view their details.',
      stack: ['Tailwind', 'Redux', 'React'],
      sourceCode: 'https://github.com/daulat68/Food-App',
      livePreview: 'https://food-app-by-daulat.netlify.app/',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'C/C++',
    'Python',
    'React',
    'Redux',
    'NodeJS',
    'Express',
    'MongoDB',
    'MySQL',
    'Restful API',
    'Tailwind CSS',
    'Bootstrap',
    'Git/Github',
    'Jest',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'daulatsingh7878@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  