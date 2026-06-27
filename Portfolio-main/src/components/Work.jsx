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
      className='black-gradient group relative w-8 h-8 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-300'
    >
      {children}
      <span className='pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black-100 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30'>
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
    <div className='bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col justify-between transition-all duration-300 border border-white/10 hover:-translate-y-1.5 hover:shadow-2xl hover:border-violet-500/35 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(139,92,246,0.18)]'>
      <div className='flex flex-col flex-grow'>
        <div className='relative w-full h-[220px] sm:h-[240px] overflow-hidden rounded-xl mb-4.5 shadow-inner'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl'
          />
        </div>

        <div className='mt-1'>
          <div className='flex items-start justify-between gap-3 mb-3'>
            <h3 className='text-white font-bold text-[18px] sm:text-[20px] leading-tight'>{name}</h3>
            <div className='flex shrink-0 items-center gap-1.5 mt-0.5'>
              <ProjectAction label='GitHub' href={source_code_link}>
                <img
                  src={github}
                  alt=''
                  className='w-4 h-4 object-contain'
                />
              </ProjectAction>
              <ProjectAction label='Live Demo' href={live_demo_link}>
                <FiExternalLink
                  aria-hidden='true'
                  className='w-4 h-4 text-white'
                />
              </ProjectAction>
            </div>
          </div>
          <p className='text-secondary text-[13.5px] leading-relaxed mb-5'>{description}</p>
        </div>
      </div>

      <div className='mt-auto pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5'>
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/5 ${tag.color}`}
          >
            #{tag.name}
          </span>
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

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto w-full'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
