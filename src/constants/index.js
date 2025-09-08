import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "preEvent Personal & Service GmbH",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2021 - September 2023",
    points: [
      "Redesigned the frontend website using Wordpress and Adobe Photoshop ([Website](https://prevent-projects.com/))",      
    ],
    location: "Trier, Germany"
  },
  {
    title: "Student Research Assistant",
    company_name: "Trier University of Applied Sciences",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2022 - July 2023",
    points: [
      "Tutor of ”OOP Introduction to Java” for the correction and evaluation of the weekly submission tasks",
      "Tutor of ”Data Structures and Algorithms” to lead the tutoring of this module with the concept ”from students for students”"
    ],
    location: "Trier, Germany"
  },
  {
    title: "Student Research Assistant",
    company_name: "Deutsches Forschungszentrum für Künstliche Intelligenz GmbH (DFKI)",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2023 - September 2023",
    points: [
      "Improved the GUI of the ProCake Project, a framework for case-based reasoning applications, using Java Swing",
      "Developed a simple website for the project using Wordpress and Docker ([Website](https://procake.uni-trier.de/))"
    ],
    location: "Trier, Germany"
  },
  {
    title: "Research Engineer",
    company_name: "DART Lab, Lake Lucerne Institute ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Develop Android applications and provide technical support for the [HealthCore Project](https://scai.ethz.ch/research/healthcore.html), a digital assessment framework for multi-clinic patient data collection",
      "Work on implementation of VR application to be used in combination with MRI-compatible videogoggles, aiming at motor capability assessment in MRI environment",
    ],
    location: "Vitznau, Switzerland"
  },
  {
    title: "Student Research Assistant",
    company_name: "SCAI Lab, ETH Zurich",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Research on standardized open-source formats for wearable sensor data",
      "Further backend development and data flow for the [HealthCore Project](https://scai.ethz.ch/research/healthcore.html)"
    ],
    location: "Zurich, Switzerland"
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };