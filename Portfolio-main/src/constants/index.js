import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    chat_app,
    tailwind,
    nodejs,
    mongodb,
    fake_curren,
    echo,
    my_portfolio,
    aws,
    html,
    git,
    sql,
  } from "../assets";
import ca from "../assets/tech/c++.webp";
import express from "../assets/tech/express.webp";
import next from "../assets/tech/next.webp";
import python from "../assets/tech/python.webp";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
    id: "education",
    title: "Education",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "SQL",
      icon: sql,
    },
    // {
    //   name: "My SQL",
    //   icon: mysql,
    // },
    // {
    //   name: "Linex",
    //   icon: linex,
    // },
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "Github",
    //   icon: github_skills,
    // },
    {
      name: "Git",
      icon: git,
    },
    // {
    //   name: "Flask",
    //   icon: flask,
    // },
    // {
    //   name: "Figma",
    //   icon: figma,
    // },
    // {
    //   name: "Canva",
    //   icon: canva,
    // },
    // {
    //   name: "C",
    //   icon: c,
    // },
    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "Windows",
    //   icon: window,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "c++",
      icon: ca,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "next",
      icon: next,
    },
    // {
    //   name: "vite",
    //   icon: vite,
    // },
    {
      name: "python",
      icon: python,
    }, 
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  
  const projects = [
    {
      name: "Fake Currency Detection",
      description:
        "Detect fake ₹100, ₹200, and ₹500 notes instantly using our smart Fake Currency Detection website. Upload a currency image, and our AI-powered system analyzes key security features—like watermarks, serial numbers, and transparent strips—using image processing and KNN classification. Get fast, accurate results through a simple, intuitive interface built with Flask.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name: "KNN",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "yellow-text-gradient",
        },
      ],
      image: fake_curren,
      source_code_link: "https://github.com/03-SudheshnaReddy/Fake-Currency-Detection",
    },
    {
      name: "Real-time Chat App",
      description:
        "A full-stack MERN chat application with JWT authentication, real-time one-to-one messaging via Socket.io, and Redux-based state management. Features include user search, profile pictures, protected routes, and a scalable architecture using MongoDB Atlas and RESTful APIs.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "yellow-text-gradient",
        },
      ],
      image: chat_app,
      source_code_link: "https://github.com/03-SudheshnaReddy/Chat-Application",
    },
    {
      name: "Echo Chamber Characterization",
      description:
        "A research-based simulation analyzing political bias and interaction patterns in social networks. Explores echo chambers using metrics like production polarity, variance, mixing patterns, and the EI Index across Baseline and Power Law network models.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "NetworkX",
          color: "pink-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "yellow-text-gradient",
        },
      ],
      image: echo,
      source_code_link: "https://github.com/03-SudheshnaReddy/Echo-Chamber-Characterization",
    },
    {
      name: "My Portfolio",
      description:
        "A responsive, space-themed portfolio built with React, Tailwind CSS, and Framer Motion — designed to reflect creativity and technical depth. Features interactive 3D elements using Three.js, smooth animations, and real-time messaging via EmailJS. A clean, scalable layout that showcases my work, skills, and personality in a visually engaging way.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
      ],
      image: my_portfolio,
      source_code_link: "https://github.com/03-SudheshnaReddy/my_portfolio",
    },
  ];
  
  export { services, technologies, projects };