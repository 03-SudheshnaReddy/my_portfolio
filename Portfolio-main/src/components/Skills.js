// import React from "react";

// import BallCanvas from "./canvas/Ball";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { styles } from "../styles";

// const Skills = () => {
//   // return (
//     <>
//       <div>
//         <p className={`${styles.sectionHeadText} `}>Skills</p>
//       </div>
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//       </>
//   );
// };

// export default SectionWrapper(Skills, "skills");
import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Skills = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionHeadText}`}>Skills</p>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28 rounded-2xl bg-tertiary flex flex-col items-center justify-center p-4 shadow-card hover:scale-105 transition-transform duration-300'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-12 h-12 object-contain mb-3'
            />
            <p className='text-white text-sm text-center font-medium'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");