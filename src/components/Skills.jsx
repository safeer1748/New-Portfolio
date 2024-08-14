import React from "react";
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiFirebase, SiAdobephotoshop } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { motion } from "framer-motion";
const Skills = () => {
  const Skills = [
    {
      icon: <FaReact/>,
      name: "React",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <TbBrandJavascript />,
      name: "Javascript",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <SiFramer />,
      name: "Framer Motion",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: "C++",
      name: "C++",
    },
    {
      icon: <IoLogoFigma />,
      name: "Figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
  ];
  const containerAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section id="skills" className="relative w-full flex flex-col justify-center items-center gap-y-16 px-6 md:px-20">
        <h1 className="font-bold text-4xl mt-28">Skills</h1>
        <motion.div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerAnimation}
        >
          {Skills.map((skill, i) => (
            <motion.div key={i} className=" py-4 flex justify-center items-center border border-gray-400"
            variants={item}
            >
              <div className="flex flex-col items-center gap-y-3">
                <h1 className="text-gray-800 text-5xl font-bold">{skill.icon}</h1>
                <h2 className="font-medium">{skill.name}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
