import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'José Estevan',
  subtitle: "I'm a Data Analyst",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile.jpg',
  paragraphOne:
    'I work as a Data Analyst, focused on analysis and decision making, transforming business needs into indicators and data into strategic information.',
  paragraphTwo:
    'I am always looking for new skills that allow me to try new solutions and technologies, with versatility and thirst for learning.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/15oDM9IR82yHDDDPfccI5Tx0JONCq9g-g/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'WIP.png',
    title: 'WIP',
    info: 'Projects under revision.',
    info2: '',
    url: 'https://github.com/JoseEstevan',
    repo: 'https://github.com/JoseEstevan', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'OVV.png',
  //   title: 'OverView',
  //   info: 'Different types of analysis, created in order to practice and test new tools.',
  //   info2: 'This project focuses on data visualization and storytelling.',
  //   url: 'https://joseestevan.github.io/OverView/',
  //   repo: '', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'ML.png',
  //   title: 'ML',
  //   info: 'Repository containing machine learning projects completed by me for academic, self-learning and hobby purposes.',
  //   info2: '',
  //   url: 'https://joseestevan.github.io/ML/',
  //   repo: '', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'DIGI.png',
  //   title: 'Digitalizze',
  //   info: 'Search platform for products and services, focused on supporting and helping small businesses to become digital.',
  //   info2: 'Project developed during the hackathon Empreenda Getnet.',
  //   url: 'https://sites.google.com/view/digitalizzze',
  //   repo: '', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'EDA.png',
  //   title: 'EDApp',
  //   info: 'EDApp was created with the aim of providing an EDA (Exploratory Data Analysis) in a simple and fast way. EDA is an approach to the analysis of data sets, in order to summarize their main characteristics, with the purpose of extracting relevant information.',
  //   info2: '',
  //   url: 'https://edapp.herokuapp.com/',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://joseestevan.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joseestevan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JoseEstevan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
