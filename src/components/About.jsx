import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { delay, motion } from "framer-motion";
const About = () => {
    const imgAnimation={
        initial:{
            scale:0,
            rotate:0
        },
        animate:{
            scale:1,
            rotate:360,
            transition:{
                duration:0.6,
                delay:0.1
            }
        }
    }
    const divAnimation={
        initial:{
            opacity:0,
            x:100
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:0.6,
                delay:0.1,
            }
        }
    }
  return (
    <>
      <section id="about" className="relative w-full flex flex-col justify-center items-center gap-y-16 px-6 md:px-20  ">
        <h1 className="font-bold text-4xl mt-28">About</h1>
        <div className="flex flex-col justify-center lg:flex-row md:justify-between items-center gap-y-8 lg:gap-x-32 overflow-hidden">
          
            <motion.img src="/assets/mypic.jpg" className="w-60 h-60 object-cover" 
            initial="initial"
            whileInView="animate"
            variants={imgAnimation}
            />
         
          <motion.div className="w-full p-5 border border-gray-400"
           initial="initial"
           whileInView="animate"
           variants={divAnimation}
          >
            <p className=" md:text-lg text-gray-900 text-justify">
              I'm a freshly graduated software engineer with expertise in
              frontend web development specializing in React.js, Tailwind CSS,
              and Bootstrap, along with a strong foundation in HTML, CSS, and
              JavaScript. I also have experience in Photoshop and provide
              graphic design services as a freelancer on Fiverr. I am seeking a
              full-time job or internship to enhance my web development skills.
            </p>
            <a href="/assets/My Resume.pdf" download="Safeer-Resume" className="flex justify-center">
            <button className=" px-6 py-2 mt-5 font-medium border border-black text-gray-900 hover:text-white hover:bg-black">
                Download CV
            </button>
            </a>
            
            <div className="mt-5 flex gap-x-3 items-center justify-center">
                <a href="https://www.linkedin.com/in/safeer-muhammad-ba302427a/" target="_blank"><FaLinkedinIn size={20} className="text-gray-700 hover:text-black"/></a>
                <a href="https://github.com/safeer1748" target="_blank"><FaGithub size={20} className="text-gray-700 hover:text-black"/></a>
                <a href="mailto:safeerkhan1748@gmail.com" target="_blank"><IoIosMail size={20} className="text-gray-700 hover:text-black"/></a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
