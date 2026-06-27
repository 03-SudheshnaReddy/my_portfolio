import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const ExperienceCard = ({ company, role, location, date, points }) => {
  return (
    <div className="bg-tertiary p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(139,92,246,0.15)] transition-all duration-300 w-full max-w-4xl mx-auto flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/5 pb-4">
        <div>
          <h3 className="text-white text-[22px] sm:text-[24px] font-bold tracking-tight">
            {role}
          </h3>
          <p className="text-purple-400 font-semibold text-[16px] sm:text-[18px] mt-1 flex items-center gap-2">
            {company} <span className="text-secondary text-sm font-normal">| {location}</span>
          </p>
        </div>
        <div className="sm:text-right shrink-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-purple-300 border border-white/10">
            {date}
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-3 mt-2 list-none p-0">
        {points.map((point, index) => (
          <li key={`experience-point-${index}`} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <p className="text-secondary text-[14.5px] sm:text-[15.5px] leading-relaxed m-0">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      company: "Zetwerk",
      role: "Software Engineer Intern",
      location: "Bangalore",
      date: "May 2025 – Jul 2025",
      points: [
        "Architected an AI-powered Analytics Sandbox for bank statement PDFs, supporting 20+ standard attributes, custom AI-generated attributes, multi-run experiments, output comparison, and LLM-based result querying.",
        "Designed a 6-step backend workflow covering S3 presigned PDF uploads, sandbox creation, run creation, asynchronous analytics execution, status polling, and metadata persistence across RDS and DynamoDB.",
        "Engineered financial analytics pipelines across 4 modules: portfolio metrics, transaction insights, benchmark comparisons, and monthly returns, supporting scheduled and on-demand data refreshes."
      ]
    }
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto w-full mb-10">
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={`experience-${index}`} {...exp} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");