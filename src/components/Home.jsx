import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  const divAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.65,
      },
    },
  };
  const buttonAnimation = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.35,
      },
    },
  };
  return (
    <>
      <section id="#" className="relative w-full h-screen flex justify-center items-center">
        <div className="bg-black/85 z-10 w-full h-screen absolute"></div>
        <img
          src="/assets/hero-bg.jpg" className="absolute w-full h-screen object-cover"/>
        <motion.div
          className=" absolute text-white flex flex-col gap-y-1 z-20"
          initial="initial"
          whileInView="animate"
          variants={divAnimation}
        >
          <h4 className="font-bold sm:text-2xl text-xl">Hi, I'm</h4>
          <h1 className="font-bold sm:text-6xl text-3xl">Safeer Muhammad</h1>
          <h2 className="font-bold sm:text-4xl text-xl">
            Frontend React Developer
          </h2>
          <a href="/assets/My Resume.pdf" download="Safeer-Resume" className="mt-4">
            <motion.button
              className="font-bold bg-white text-black text-md px-4 py-2"
              whileHover="hover"
              variants={buttonAnimation}
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
