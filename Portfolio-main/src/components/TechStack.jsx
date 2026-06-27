import React from "react";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiScikitlearn,
  SiSocketdotio,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  TbApi,
  TbBrandVscode,
} from "react-icons/tb";

import { SectionWrapper } from "../hoc";

const technologies = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "REST API", Icon: TbApi, color: "#A78BFA" },
  { name: "JWT", Icon: SiJsonwebtokens, color: "#FFFFFF" },
  { name: "Socket.io", Icon: SiSocketdotio, color: "#FFFFFF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "VS Code", Icon: TbBrandVscode, color: "#007ACC" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
  { name: "Render", Icon: SiRender, color: "#46E3B7" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
];

const marqueeRows = [0, 1, 2].map((rowIndex) =>
  technologies.filter((_, index) => index % 3 === rowIndex)
);

const TechIcon = React.memo(({ technology, isDuplicate = false }) => {
  const { name, Icon, color } = technology;

  return (
    <span
      className="tech-stack-item group relative flex shrink-0 items-center justify-center text-center outline-none"
      style={{ "--brand-color": color }}
      role={isDuplicate ? undefined : "listitem"}
      aria-label={isDuplicate ? undefined : name}
      aria-hidden={isDuplicate ? "true" : undefined}
      tabIndex={isDuplicate ? -1 : 0}
    >
      <Icon
        aria-hidden="true"
        className="tech-stack-icon transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.15] group-focus-visible:-translate-y-1 group-focus-visible:scale-[1.15]"
        style={{ color }}
      />
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap text-[11px] font-semibold text-white opacity-0 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:text-xs">
        {name}
      </span>
    </span>
  );
});

const TechStack = () => {
  return (
    <div
      className="tech-stack-section relative left-1/2 isolate w-screen max-w-[100vw] -translate-x-1/2 overflow-x-hidden bg-[#07081B] py-10 sm:py-12 lg:py-14"
      aria-labelledby="tech-stack-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="mb-8 text-center sm:mb-10">
        <h2
          id="tech-stack-heading"
          className="text-4xl font-black leading-[0.95] tracking-normal text-white sm:text-5xl lg:text-6xl"
        >
          My{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
      </div>

      <div className="mx-auto w-[95vw] max-w-[95vw] overflow-hidden px-1 sm:px-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#07081B] to-transparent sm:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#07081B] to-transparent sm:w-12" />

        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
          {marqueeRows.map((row, rowIndex) => {
            const isReverse = rowIndex === 1;
            const trackItems = [...row, ...row];

            return (
              <div
                className="tech-stack-marquee overflow-hidden py-2"
                role="list"
                aria-label={`Technology row ${rowIndex + 1}`}
                key={`tech-row-${rowIndex}`}
              >
                <div
                  className={`tech-stack-track flex w-max items-center ${
                    isReverse ? "tech-stack-track-reverse" : ""
                  }`}
                >
                  {trackItems.map((technology, index) => (
                    <TechIcon
                      technology={technology}
                      isDuplicate={index >= row.length}
                      key={`${technology.name}-${rowIndex}-${index}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { technologies };
export default SectionWrapper(TechStack, "skills");
