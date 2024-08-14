import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const handleBGColor = () => {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  window.addEventListener("scroll", handleBGColor);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const navAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.75,
      },
    },
  };
  const liAnimation = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const DropdownAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: toggleMenu ? 1 : 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const hamburgerAnimation = {
    initial: {
      rotate: 0,
    },
    first: {
      rotate: toggleMenu ? 45 : 0,
      transition: {
        duration: 0.5,
      },
    },
    third: {
      y: toggleMenu ? -8 : 0,
      rotate: toggleMenu ? -45 : 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full flex justify-between z-30 px-6 md:px-20 py-4 items-center ${
          bgColor ? "bg-black duration-500" : "bg-transparent duration-500"
        }`}
        initial="initial"
        animate="animate"
        variants={navAnimation}
      >
        <motion.a
          href="#"
          className="font-medium text-xl text-white cursor-pointer"
          whileHover="hover"
          variants={liAnimation}
        >
          Safeer.
        </motion.a>
        <div className="hidden md:flex">
          <ul className="flex gap-x-10 text-white">
            <motion.li
              className="cursor-pointer"
              whileHover="hover"
              variants={liAnimation}
            >
              <a href="#"> Home</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover="hover"
              variants={liAnimation}
            >
              <a href="#about">About</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover="hover"
              variants={liAnimation}
            >
              <a href="#education">Education</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover="hover"
              variants={liAnimation}
            >
              <a href="#skills">Skills</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover="hover"
              variants={liAnimation}
            >
              <a href="#projects">Projects</a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover="hover"
              variants={liAnimation}
            >
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full flex items-center justify-center relative">
          <button
            className="absolute flex w-full items-end flex-col gap-1.5 z-50"
            onClick={handleToggleMenu}
          >
            <motion.span
              className={`h-0.5  w-7 ${toggleMenu ? "bg-black" : "bg-white"}`}
              initial="initial"
              animate="first"
              variants={hamburgerAnimation}
            ></motion.span>
            <span
              className={`h-0.5  w-7 bg-white ${toggleMenu ? "hidden" : ""}`}
            ></span>
            <motion.span
              className={`h-0.5  w-7 ${toggleMenu ? "bg-black" : "bg-white"}`}
              initial="initial"
              animate="third"
              variants={hamburgerAnimation}
            ></motion.span>
          </button>
          <motion.div
            className={`${
              toggleMenu
                ? " py-10 z-40 w-full fixed top-0 right-0 bg-white shadow-lg"
                : "hidden"
            } `}
            initial="initial"
            animate="animate"
            variants={DropdownAnimation}
          >
            <ul className="flex flex-col items-center gap-y-4 mt-8 font-medium text-2xl text-gray-800">
              <motion.li
                onClick={handleToggleMenu}
                className="cursor-pointer"
                whileHover="hover"
                variants={liAnimation}
              >
                <a href="#"> Home</a>
              </motion.li>
              <motion.li
                onClick={handleToggleMenu}
                className="cursor-pointer"
                whileHover="hover"
                variants={liAnimation}
              >
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                onClick={handleToggleMenu}
                className="cursor-pointer"
                whileHover="hover"
                variants={liAnimation}
              >
                <a href="#education">Education</a>
              </motion.li>
              <motion.li
                onClick={handleToggleMenu}
                className="cursor-pointer"
                whileHover="hover"
                variants={liAnimation}
              >
                <a href="#skills">Skills</a>
              </motion.li>
              <motion.li
                onClick={handleToggleMenu}
                className="cursor-pointer"
                whileHover="hover"
                variants={liAnimation}
              >
                <a href="#projects">Projects</a>
              </motion.li>
              <motion.li
                onClick={handleToggleMenu}
                className="cursor-pointer"
                whileHover="hover"
                variants={liAnimation}
              >
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
