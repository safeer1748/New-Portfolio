import React from "react";
import { motion } from "framer-motion";
const Education = () => {
  const Educations = [
    {
      title: "BS Software",
      institute: "Internation Islamic University",
      location: "Islamabad",
      date: "09/2020 - Present",
      marks: "3.44/4.00, 75%",
    },
    {
      title: "Intermediate",
      institute: "F.G Degree Collage",
      location: "Wah cantt",
      date: "07/2018 - 05/2020",
      marks: "895/1100, 81%",
    },
    {
      title: "Matriculation",
      institute: "F.G Public School No.3",
      location: "Wah cantt",
      date: "07/2014 - 04/2018",
      marks: "898/1100, 81%",
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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
      <section id="education" className="relative w-full flex flex-col justify-center items-center gap-y-16 px-6 md:px-20">
        <h1 className="font-bold text-4xl mt-28">Education</h1>
        <motion.div
          className="w-full  flex flex-col gap-y-8"
          initial="hidden"
          whileInView="visible"
          variants={containerAnimation}
        >
          {Educations.map((education, i) => (
            <motion.div
              key={i}
              className="w-full border border-gray-400 p-5"
              variants={item}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-bold ">
                  {education.title}
                </h1>
                <label className="text-sm md:text-md font-medium">
                  {education.date}
                </label>
              </div>
              <h2 className="text-md md:text-xl font-semibold text-gray-700">
                {education.institute}
              </h2>
              <h3 className=" text-sm md:text-md font-medium">
                {education.location}
              </h3>

              <label className="text-sm md:text-md font-medium">
                {education.marks}
              </label>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Education;
