import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const isAbout = idName === "about";
    const paddingClass = isAbout
      ? "pt-24 sm:pt-36 pb-8 sm:pb-12 px-6 sm:px-16"
      : "pt-6 pb-8 sm:pt-10 sm:pb-12 px-6 sm:px-16";

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${paddingClass} max-w-7xl mx-auto relative z-0`}
      >
        <span id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;