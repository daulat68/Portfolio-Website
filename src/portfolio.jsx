const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://portfolio-daulat.netlify.app',
    title: 'DS.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Daulat Singh',
    role: 'Software Developer',
    description:
      'Software Developer with experience in building scalable backend systems and full-stack applications. Skilled in JavaScript, Python, and C++, with a focus on designing efficient APIs, asynchronous processing pipelines, and data-driven systems. Experienced with React for frontend development and Node.js/FastAPI for backend services, along with PostgreSQL, MongoDB, and Redis for data management. Strong interest in system design, performance optimization, and solving real-world problems through reliable and maintainable code.',
    resume: 'daulatsingh.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/daulat68',
      github: 'https://github.com/daulat68',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'DocuFlow',
      description:
        'A scalable asynchronous document processing system that uses a queue-based architecture to handle long-running tasks without blocking API requests. Users can upload documents, which are processed in the background and transformed into structured data with lifecycle-based status tracking.',
      stack: [
        'React',
        'TypeScript',
        'FastAPI',
        'PostgreSQL',
        'Supabase',
        'Redis',
        'Celery',
        'Cloudinary',
      ],
      sourceCode: 'https://github.com/daulat68/DocuFlow',
      livePreview: 'https://async-document-processing-system-frontend.onrender.com/',
    },
    {
      name: 'StreamChat',
      description:
        'A real-time chat application built with the MERN stack, Socket.io, and Redis. Features JWT authentication with Brevo email OTP verification, one-to-one messaging, online/offline status, global state with Zustand, and a responsive TailwindCSS + DaisyUI interface with multiple themes.',
      stack: [
        'React',
        'TailwindCSS',
        'DaisyUI',
        'Zustand',
        'Node.js',
        'Express.js',
        'Socket.io',
        'Redis',
        'MongoDB',
        'Brevo',
        'JWT',
      ],
      sourceCode: 'https://github.com/daulat68/Chat-App',
      livePreview: 'https://chat-app-jwzl.onrender.com/',
    },
    {
      name: 'GameFinder',
      description:
        'Game Finder is a responsive React app with Clerk authentication, Redux Toolkit, and RAWG API integration. It supports game discovery, filtering, bookmarking, and uses GitHub Actions to build & push Docker images to Docker Hub.',
      stack: ['React', 'Clerk Authentication', 'Redux'],
      sourceCode: 'https://github.com/daulat68/Game-Finder',
      livePreview: 'https://game-finderbydaulat.netlify.app/',
    },
    {
      name: 'Food App',
      description:
        'This is a food ordering application built using React and Parcel. It fetches restaurant data from an API and displays restaurant menus, categories, and food items. Users can check online status, log in/out, and view their details.',
      stack: ['Tailwind CSS', 'Redux', 'React'],
      sourceCode: 'https://github.com/daulat68/Food-App',
      livePreview: 'https://food-app-by-daulat.netlify.app/',
    },
    {
      name: 'ToDesktop Website Clone',
      description:
        'This project is a clone of the ToDesktop website, designed to provide users with a seamless experience for creating desktop applications from web apps. The site features a modern layout with responsive design, enhanced using Tailwind CSS and JavaScript for dynamic animations and interactive elements.',
      stack: ['HTML', 'Javascript', 'Tailwind CSS'],
      sourceCode: 'https://github.com/daulat68/ToDesktop-Clone',
      livePreview: 'https://daulat68.github.io/ToDesktop-Clone/',
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
    'Scrapy',
    'Playwright',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'daulatsingh7878@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  