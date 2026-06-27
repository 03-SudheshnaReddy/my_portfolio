import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    aws,
    html,
    git,
    sql,
    parkwise,
    nextflow,
    career_crawler,
    sign_language,
    ai_interview,
    job_portal,
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
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
    {
      title: "Published Researcher",
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
      name: "ParkWise - Parking Intelligence Platform",
      description:
        "ParkWise is a MERN & FastAPI parking intelligence platform that turns traffic violation data into spatial hotspot insights. Employs PostGIS geospatial queries and LightGBM models to predict demand and identify congestion zones via an interactive dashboard.",
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
          color: "purple-text-gradient",
        },
        {
          name: "PostGIS",
          color: "cyan-text-gradient",
        },
        {
          name: "LightGBM",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
      ],
      image: parkwise,
      source_code_link: "https://github.com/03-SudheshnaReddy/ParkWise-Command-Center",
      live_demo_link: "https://park-wise-command-center.vercel.app/landing",
    },
    {
      name: "NextFlow - AI Workflow Automation Platform",
      description:
        "A visual workflow automation engine for constructing and executing complex multi-step AI pipelines. Uses a Next.js/Prisma DAG execution backend to coordinate sequential/parallel tasks across external models and webhook integrations. The workspace features React Flow for drag-and-drop pipeline orchestration.",
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
          color: "purple-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "cyan-text-gradient",
        },
        {
          name: "React Flow",
          color: "blue-text-gradient",
        },
        {
          name: "Zustand",
          color: "pink-text-gradient",
        },
        {
          name: "Trigger.dev",
          color: "green-text-gradient",
        },
      ],
      image: nextflow,
      source_code_link: "https://github.com/03-SudheshnaReddy/NextFlow",
      live_demo_link: "https://next-flow-flame.vercel.app/",
    },
    {
      name: "CareerCrawler - AI Job Finder",
      description:
        "An automated job aggregator that scrapes, normalizes, and indexes listings from multiple portals. Built on Node.js with Puppeteer and Cheerio, it exposes a clean REST API for location and skill-based matching. Features a React client and background scheduler for continuous catalog synchronization.",
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
          color: "purple-text-gradient",
        },
        {
          name: "Puppeteer",
          color: "cyan-text-gradient",
        },
        {
          name: "Cheerio",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "pink-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
      ],
      image: career_crawler,
      source_code_link: "https://github.com/03-SudheshnaReddy/CareerCrawler",
      live_demo_link: "https://career-crawler-6tga.vercel.app/",
    },
    {
      name: "Continuous Sign Language Recognition",
      description:
        "A sequence-to-sequence deep learning pipeline that translates video streams into legible text. Combines OpenCV preprocessing with TensorFlow sequence modeling to recognize continuous gestural motion in real-time. Features frame-by-frame normalizations to stabilize translation outcomes.",
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
          name: "Keras",
          color: "purple-text-gradient",
        },
        {
          name: "NumPy",
          color: "cyan-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "blue-text-gradient",
        },
      ],
      image: sign_language,
      source_code_link: "https://github.com/03-SudheshnaReddy/Continuous-Sign-Language-Recognition-using-Deep-Learning",
    },
    {
      name: "AI Mock Interviews",
      description:
        "An interactive web platform designed to simulate role-specific technical interviews and provide instant feedback using Gemini API. Features real-time speech assessment and secure session management. The backend runs scoring algorithms to yield prepare-ready performance metrics.",
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
          name: "Tailwind",
          color: "purple-text-gradient",
        },
        {
          name: "Clerk",
          color: "cyan-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
      ],
      image: ai_interview,
      source_code_link: "https://github.com/03-SudheshnaReddy/AI-mock-interviews",
      live_demo_link: "https://mockprepwise.vercel.app/",
    },
    {
      name: "HireLand",
      description:
        "A MERN recruitment portal facilitating secure candidate and recruiter workflows. Uses JWT session authentication, automated resume parsing, and real-time application tracking with email alerts. Features interactive dashboards to organize pipelines and filter applicants.",
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
          color: "purple-text-gradient",
        },
        {
          name: "JWT",
          color: "cyan-text-gradient",
        },
        {
          name: "REST API",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: job_portal,
      source_code_link: "https://github.com/03-SudheshnaReddy/Hire-Land",
    },
  ];
  export { services, technologies, projects };
