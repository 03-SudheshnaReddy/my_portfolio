import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Experience = () => {
  return (
    <>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </div>

      <div className="mt-10 bg-tertiary rounded-2xl p-6">
        <h3 className="text-white text-[24px] font-bold">
          Add Your Experience Here
        </h3>
        <p className="text-secondary mt-3 text-[17px] leading-[28px]">
          You can add internships, hackathons, open-source contributions, research work, or any professional experience here.
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");