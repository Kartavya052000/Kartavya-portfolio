import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  Projects: 'projects',
  OPEN_SOURCE: 'open-source',
};
// import signtruckImg from "../../"
export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Work',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
  {
    label: 'Projects',
    value: PROJECT_CATEGORY.Projects,
    icon: 'bx:code-block',
  },
 
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    
    imgSrc:"https://i.ibb.co/5ksVbMS/truvoye.png" ,
    title: 'Truvoye',
    techIcons: [
      // getSkillByLabel(FRONTEND_SKILLS, 'WordPress'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Socket.io'),
      getSkillByLabel(BACKEND_SKILLS, 'Google Maps'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS'),
    ],
    
    description:
      'Truvoye web application is a logistics management platform that helps the logistic companies that want to simplify the delivery initiation process ',
    repoLink: '',
    sourceLink: 'https://truvoye.com',
    category: [ PROJECT_CATEGORY.Projects],
  },
  {
    imgSrc:"https://i.ibb.co/BgRJ5cq/In-haus.png" ,
    title: 'In-Haus',
    techIcons: [      
      getSkillByLabel(FRONTEND_SKILLS, 'React Native'),
      getSkillByLabel(BACKEND_SKILLS, 'Graphql'),
      getSkillByLabel(FRONTEND_SKILLS, 'Expo'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Socket.io'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS'),
      getSkillByLabel(BACKEND_SKILLS, 'OpenAI'),
      getSkillByLabel(BACKEND_SKILLS, 'Alexa'),
      getSkillByLabel(BACKEND_SKILLS, 'NGINX'),
      getSkillByLabel(BACKEND_SKILLS, 'Spoonacular'),
    ],
    
    description:
      '“In-haus,” we address this issue by motivating users to complete chores that keep getting postponed. ',
    repoLink: '',
    sourceLink: 'https://in-haus.ca/',
    category: [ PROJECT_CATEGORY.Projects],
  },
  { 
    imgSrc:"https://i.ibb.co/kJs7mXy/client-signtruck.png" ,
    title: 'SignTruck - Mobile Billboard',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
    ],
    description:
      'Signtruck is a website which showcase a client business in mobile billboard advertisement in Canada.',
    repoLink: '',
    sourceLink: 'https://www.signtruck.ca/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {

    imgSrc:"https://i.ibb.co/bFFbw81/client-njc.png" ,
    title: 'NJC - (Naya Jeevan Church)',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Stripe'),
    ],
    description:
      'JaniPro offers an excellent industrial and commercial cleaning services.It offers various services in affordable budget ',
    repoLink: '',
    sourceLink: 'https://65a5c30ccaa0934f2b8d5f44--superlative-marzipan-762529.netlify.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc:"https://i.ibb.co/1myK1q6/image.png" ,
    title: 'Xcellent Tours & Travel',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
    ],
    description:
      'A website that offers to send requests for car,flight,hotel and cruise booking.It offers an email notification and my-bookings.',
    repoLink: '',
    sourceLink: 'https://xcellenttoursandtravels.com/',
    category: [ PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    
    imgSrc:"https://i.ibb.co/Q68gNpR/client-aaisa.png" ,
    title: 'Aaisa Vacations',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'WordPress'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
    ],
    description:
      'A Canadian Website which allow users to send quotes to get travel budgets from the company.',
    repoLink: '',
    sourceLink: 'https://www.aaisavacations.com',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
 
  {
    
    imgSrc:"https://i.ibb.co/d4SY509/client-janipro.png" ,
    title: 'JaniPro Solutions',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'WordPress'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
    ],
    description:
      'JaniPro offers an excellent industrial and commercial cleaning services.It offers various services in affordable budget ',
    repoLink: '',
    sourceLink: 'https://janiprosolutions.com',
    category: [ PROJECT_CATEGORY.OPEN_SOURCE],
  }
 

  // {
  //   imgSrc: 'https://images2.imgbox.com/b5/bb/6f5g9QBE_o.png',
  //   title: 'Developer Portfolio',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
  //   ],
  //   description:
  //     'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
  //   repoLink: 'https://github.com/dhavalCode/dev-portfolio',
  //   sourceLink: 'https://dhavalcode.com/',
  //   category: [PROJECT_CATEGORY.OPEN_SOURCE],
  // },
  // {
  //   imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
  //   title: 'Kitchen Store  - E-Commerce',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
  //     {
  //       label: 'Java',
  //       icon: 'logos:java',
  //     },
  //     getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
  //   ],
  //   description:
  //     'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
  //   repoLink: 'https://github.com/dhavalcode/ecommerce-java-project',
  //   sourceLink: '',
  //   category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  // },

  // {
  //   imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
  //   title: 'Netflix Clone - TMDB API Project',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
  //     getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
  //   ],
  //   description: 'Netflix clone using react Js. Proving movies details using TMDB API.',
  //   repoLink: 'https://github.com/dhavalcode/netflix-clone',
  //   sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
  //   category: [PROJECT_CATEGORY.OPEN_SOURCE],
  // },
];
