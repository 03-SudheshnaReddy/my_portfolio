import React from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { FiExternalLink } from "react-icons/fi";

const ProjectAction = ({ label, href, children }) => {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      title={label}
      className='black-gradient group relative w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
    >
      {children}
      <span className='pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black-100 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        {label}
      </span>
    </a>
  );
};

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div className='bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-3'>
        <div className='flex items-start justify-between gap-3'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <div className='flex shrink-0 items-center gap-2'>
            <ProjectAction label='GitHub' href={source_code_link}>
              <img
                src={github}
                alt=''
                className='w-1/2 h-1/2 object-contain'
              />
            </ProjectAction>
            <ProjectAction label='Live Demo' href={live_demo_link}>
              <FiExternalLink
                aria-hidden='true'
                className='w-1/2 h-1/2 text-white'
              />
            </ProjectAction>
          </div>
        </div>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-3 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>
  Recent <span className="ml-4">Projects</span>
</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Here’s a curated collection of my projects — where ideas meet execution. These works reflect my hands-on experience with real-world problems, modern technologies, and clean code practices. Each project is accompanied by a well-documented README that walks you through the logic, implementation, and thought process behind the solution
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
