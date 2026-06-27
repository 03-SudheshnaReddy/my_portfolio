import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </div>

      <div className='mt-4 text-secondary text-[16px] sm:text-[17px] max-w-4xl leading-[30px] flex flex-col gap-4.5'>
        <p>
          I enjoy designing intuitive user experiences while engineering efficient, maintainable backend systems that solve real-world problems. Beyond core software development, I'm deeply interested in network science and AI-driven social computing.
        </p>
        <p>
          My research paper, <strong>"EchoShield: Understanding Structural Hole Spanners to Mitigate Echo Chambers,"</strong> has been accepted at the 18th ACM Web Science Conference (WebSci 2026). The work explores how influential bridge nodes within social networks can reduce polarization and mitigate echo chambers, contributing toward healthier online communities through graph-based analysis.
        </p>
        <p>
          I actively challenge myself through competitive programming, earning titles such as <strong>Expert on Codeforces</strong>, <strong>Knight on LeetCode</strong>, and <strong>3★ on CodeChef</strong>, alongside participating in the Meta Hacker Cup. These experiences have strengthened my problem-solving ability, analytical thinking, and consistency under pressure.
        </p>
        <p>
          Outside academics, I enjoy contributing to the developer community as a <strong>Google Student Ambassador '25</strong>, collaborating with peers, exploring emerging technologies, and continuously learning.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");