import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const educationData = [
  {
    institution:
      "Atal Bihari Vajpayee-Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior",
    year: "2022 - 2027",
    details: [
      "CGPA: 7.66 (till 6th sem)",
      "Successfully cleared GATE CSE 2025 in 1st attempt.",
      "She-Fi Scholar '25.",
      "Passionate about problem solving, building real-world projects, sports, and hustling.",
    ],
  },
  {
    institution: "Narayana Junior College",
    year: "2019 - 2021",
    details: [
      "Percentage: 97.4%",
      "Secured top 2% in JEE Main 2022 among 10 lakh applicants.",
      "Successfully cleared JEE Advanced 2022.",
    ],
  },
  {
    institution: "Sri Chaitanya School",
    year: "2018 - 2019",
    details: [
      "CGPA: 10",
      "Secured top score in AP State Board exams in school.",
      "Successfully cleared Maths Olympiad.",
    ],
  },
];

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>

      <div className="mt-10 relative flex flex-col items-center">
        <div className="absolute w-1 h-full bg-gray-600 left-1/2 transform -translate-x-1/2 z-0" />

        <div className="w-full flex flex-col gap-10 z-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-[#1a1a2e] text-white p-6 rounded-lg shadow-lg w-[90%] md:w-[42%]">
                <h3 className="text-lg font-bold text-white">
                  {item.institution}
                </h3>
                <p className="text-blue-400 text-sm mb-3 font-semibold">
                  {item.year}
                </p>
                <div className="text-gray-300 text-[15px] space-y-2 leading-relaxed">
                  {item.details.map((line, i) => (
                    <p key={i}>• {line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
