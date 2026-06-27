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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving Enthusiast",
      icon: creator,
    },
    {
      title: "Web3 & ML Explorer",
      icon: web,
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
      name: "ParkWise - Bengaluru Parking Intelligence Platform",
      description:
        "Built a full-stack parking intelligence platform that turns Bengaluru traffic violation data into actionable congestion insights. The system uses PostGIS geospatial queries, clustering, and forecasting to help identify high-risk parking hotspots through an interactive dashboard.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "orange-text-gradient",
        },
        {
          name: "PostGIS",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "LightGBM",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "yellow-text-gradient",
        },
      ],
      image: echo,
      source_code_link: "https://github.com/03-SudheshnaReddy/ParkWise-Command-Center",
      live_demo_link: "https://park-wise-command-center.vercel.app/landing",
    },
    {
      name: "NextFlow - AI Workflow Automation Platform",
      description:
        "Created a visual workflow automation platform for building AI-powered pipelines with drag-and-drop nodes. The app uses a DAG execution engine to resolve dependencies, run independent branches efficiently, and connect AI, media, and automation services.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "orange-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "React Flow",
          color: "pink-text-gradient",
        },
        {
          name: "Zustand",
          color: "green-text-gradient",
        },
        {
          name: "Trigger.dev",
          color: "yellow-text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://github.com/03-SudheshnaReddy/NextFlow",
      live_demo_link: "https://next-flow-flame.vercel.app/",
    },
    {
      name: "CareerCrawler - AI Job Finder",
      description:
        "Developed a job aggregation platform that collects, normalizes, and serves listings from multiple career portals. Automated scraping pipelines feed a REST API, giving users a cleaner way to discover relevant roles from one interface.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
        {
          name: "Axios",
          color: "blue-text-gradient",
        },
        {
          name: "Cheerio",
          color: "pink-text-gradient",
        },
        {
          name: "Puppeteer",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "yellow-text-gradient",
        },
      ],
      image: chat_app,
      source_code_link: "https://github.com/03-SudheshnaReddy/CareerCrawler",
      live_demo_link: "https://career-crawler-6tga.vercel.app/",
    },
    {
      name: "Continuous Sign Language Recognition using Deep Learning",
      description:
        "Built a deep learning pipeline for recognizing continuous sign language gestures from video sequences. The project combines computer vision preprocessing with sequence modeling to interpret motion-based gestures more reliably.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "pink-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "orange-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "green-text-gradient",
        },
      ],
      image: creator,
      source_code_link: "https://github.com/03-SudheshnaReddy/Continuous-Sign-Language-Recognition-using-Deep-Learning",
    },
    {
      name: "AI Mock Interviews",
      description:
        "Designed an AI interview preparation platform that simulates technical interview sessions and generates structured feedback. The experience helps users practice answers, review performance, and improve readiness through an interactive web flow.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "orange-text-gradient",
        },
      ],
      image: fake_curren,
      source_code_link: "https://github.com/03-SudheshnaReddy/AI-mock-interviews",
    },
    {
      name: "HireLand",
      description:
        "Developed a full-stack recruitment platform that connects recruiters and candidates through role-based workflows. It supports authentication, job posting, candidate discovery, and application management using a MERN architecture.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "orange-text-gradient",
        },
        {
          name: "JWT",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
      ],
      image: backend,
      source_code_link: "https://github.com/03-SudheshnaReddy/Hire-Land",
    },
  ];
  export { services, technologies, projects };
