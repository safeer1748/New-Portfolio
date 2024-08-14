import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";
import Web_Modal from "./Web_Modal";
const Web_projects = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (id) => {
    setSelected(cardDetails.filter((data) => data.id === id));
  };
  const cardDetails = [
    {
      id: 1,
      thumb_url: "/assets/legalEse/legalese thumbnail.png",
      title: "LegalEse",
      description:
        "LegalEse is a Management System created using React.js, Tailwind CSS and Firebase which helps Lawyers to Manage Cases, Clients, Appointments and create Profile. It also helps the client to book an appointment with a lawyer.",
      carousel_img: [
        "/assets/legalEse/carousel img/1.png",
        "/assets/legalEse/carousel img/2.png",
        "/assets/legalEse/carousel img/3.png",
        "/assets/legalEse/carousel img/4.png",
        "/assets/legalEse/carousel img/5.png",
        "/assets/legalEse/carousel img/6.png",
        "/assets/legalEse/carousel img/7.png",
      ],
      github_url:"https://github.com/safeer1748/LegalEse",
    },
    {
      id: 2,
      thumb_url: "/assets/eduford/eduford thumbnail.png",
      title: "Eduford",
      description:
        "A Landing Page of the university created with the help of React.js and Tailwind CSS. Also use Framer-Motion for the animation",
      carousel_img: ["/assets/eduford/carousel img/1.png"],
      github_url:"https://github.com/safeer1748/eduford",
      website_url:"https://eduford-iota.vercel.app/",
    },
    {
      id: 3,
      thumb_url: "/assets/calculator/calculator thumbnail.png",
      title: "Calculator",
      description:
        "It is calculator created with the help of React.js and Tailwind.css. It perform basic math operation with the help of Mathjs library. I also added some checks for better experience.",
      carousel_img: ["/assets/calculator/carousel img/1.png"],
      github_url:"https://github.com/safeer1748/calculator",
      website_url:"https://calculator-woad-xi-40.vercel.app/",
    },
    {
      id: 4,
      thumb_url: "/assets/newsbay/newsbay thumbnail.png",
      title: "Newsbay",
      description:
        "Newsbay is a News app which can fetch the top headlines news of different category from News API. It is created by using React.js and Tailwind CSS.",
      carousel_img: [
        "/assets/newsbay/carousel img/1.png",
        "/assets/newsbay/carousel img/2.png",
        "/assets/newsbay/carousel img/3.png",
      ],
      github_url:"https://github.com/safeer1748/Newsbay",
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
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerAnimation}
      >
        {cardDetails.map((data) => (
          <motion.div
            layoutId={data.id}
            key={data.id}
            className="relative bg-black w-full cursor-pointer group"
            variants={item}
            onClick={() => handleSelected(data.id)}
          >
            <div className="w-full h-full flex justify-center items-end pb-5 absolute z-10 group-hover:bg-transparent bg-black/20"></div>
            <GrFormNextLink
              size={23}
              className="absolute group-hover:-rotate-45 transition duration-150 bg-black rounded-full top-2 right-2 z-20 text-white"
            />
            <img
              src={data.thumb_url}
              alt="Thumbnail img"
              className=" w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal "
            />
          </motion.div>
        ))}
      </motion.div>
      {selected && <Web_Modal selected={selected} setSelected={setSelected} />}
    </>
  );
};

export default Web_projects;
