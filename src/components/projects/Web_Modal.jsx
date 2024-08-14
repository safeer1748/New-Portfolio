import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import Carousel_Model from "./Carousel_Model";
const Web_Modal = ({ selected, setSelected }) => {
  const [carouselModel, setCarouselModel] = useState(false);
  const handleCarouselModal = () => {
    setCarouselModel(!carouselModel);
  };
  const cardAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };
  const buttonAnimation = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.15,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40 flex justify-center items-center overflow-auto">
        <motion.div
          className="relative w-full md:w-1/2 flex flex-col mx-3"
          initial="hidden"
          whileInView="visible"
          variants={cardAnimation}
        >
          <div className=" w-full shadow-xl z-10 overflow-hidden">
            <div className="min-w-[90%]">
              <img
                src={selected[0].thumb_url}
                className="w-full h-full pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col p-3 gap-2 bg-white">
            <h1 className="text-2xl font-extrabold">{selected[0].title}</h1>
            <p className="text-sm text-gray-700">{selected[0].description}</p>
            <div className="flex gap-x-4">
              <a href={selected[0].github_url} target="_blank">
                <motion.button
                  className="text-sm bg-black text-white px-4 py-2"
                  initial="initial"
                  whileHover="animate"
                  variants={buttonAnimation}
                >
                  Github Code
                </motion.button>
              </a>
              {selected[0].id === 2 || selected[0].id === 3 ? (
                <a href={selected[0].website_url} target="_blank">
                  <motion.button
                    className="text-sm bg-black text-white px-4 py-2"
                    initial="initial"
                    whileHover="animate"
                    variants={buttonAnimation}
                  >
                    Live Demo
                  </motion.button>
                </a>
              ) : (
                <a>
                  <motion.button
                  onClick={handleCarouselModal}
                    className="text-sm bg-black text-white px-4 py-2"
                    initial="initial"
                    whileHover="animate"
                    variants={buttonAnimation}
                  >
                    Image Demo
                  </motion.button>
                </a>
              )}
            </div>
          </div>
          <motion.button
            initial="initial"
            whileHover="animate"
            variants={buttonAnimation}
            className="absolute bg-black rounded-full top-2 right-2 z-50 cursor-pointer text-white"
            onClick={() => setSelected(null)}
          >
            <IoIosClose size={23} />
          </motion.button>
        </motion.div>
      </div>
      {carouselModel && (
        <Carousel_Model
          imgs={selected[0].carousel_img}
          handleCarouselModal={handleCarouselModal}
        />
      )}
    </>
  );
};

export default Web_Modal;
