import React from "react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel_Model = ({ imgs, handleCarouselModal }) => {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="fixed inset-0 bg-black/60 z-40 flex justify-center items-center overflow-auto">
      <motion.div
        className="relative w-[80%] md:w-[70%] h-auto flex flex-col mx-3"
        initial="hidden"
        whileInView="visible"
        variants={cardAnimation}
      >
        <div className="w-full">
        <Slider {...settings}>
            {imgs.map((img, i) => (
                <img src={img} className="w-full h-full object-cover" />
            ))}
        </Slider>
        </div>
        <motion.button
          initial="initial"
          whileHover="animate"
          variants={buttonAnimation}
          className="absolute bg-black rounded-full top-2 right-2 z-50 cursor-pointer text-white"
          onClick={handleCarouselModal}
        >
          <IoIosClose size={23} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Carousel_Model;
