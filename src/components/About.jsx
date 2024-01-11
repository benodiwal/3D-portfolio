import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div 
    variants={fadeIn("right", "spring", 0.5*index , 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
    <div options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
    flex flex-col items-center justify-evenly">
    <img src={icon} alt={title} 
      className="w-16 h-16 object-contain"
    />
    <h3 className="text-white text-[20px] font-bold">
      {title}
    </h3>
    </div>
    </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, my name is Sachin, and I'm a skilled web developer with 1 year of
        experience. I have a passion for creating visually stunning and
        user-friendly websites that deliver exceptional user experiences. My
        expertise lies in front-end web development, where I specialize in HTML,
        CSS, and JavaScript, as well as popular frameworks such as React,
        Angular, and Vue. I pride myself on my ability to write clean and
        efficient code that is optimized for performance and scalability. I'm
        always looking for new challenges and opportunities to expand my skill
        set, and I'm dedicated to staying up-to-date with the latest trends and
        best practices in web development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
