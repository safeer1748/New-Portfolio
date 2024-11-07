import React from 'react'
import { motion } from "framer-motion";
const Graphics_gallery = () => {

    const containerAnimation = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.2,
          },
        },
      };
  return (
    <div>
        <motion.div className='columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-3 [&>img:not(:first-child)]:mt-3'
        initial="hidden"
        whileInView="visible"
        variants={containerAnimation}>
            <img src="/assets/graphics/Podcast & Album/1.jpg" alt="" />
            <img src="/assets/graphics/Book/1.jpg" alt="" />
            <img src="/assets/graphics/Thumbnail/1.jpg" alt="" />
            <img src="/assets/graphics/Podcast & Album/2.jpg" alt="" />
            <img src="/assets/graphics/Book/2.jpg" alt="" />
            <img src="/assets/graphics/Thumbnail/4.jpg" alt="" />
            <img src="/assets/graphics/Podcast & Album/3.jpg" alt="" />
            <img src="/assets/graphics/Thumbnail/2.jpg" alt="" />
            <img src="/assets/graphics/Banner & Poster/1.jpg" alt="" />
            <img src="/assets/graphics/Podcast & Album/4.jpg" alt="" />
            <img src="/assets/graphics/Thumbnail/3.jpg" alt="" />
            <img src="/assets/graphics/Podcast & Album/5.jpg" alt="" />
            <img src="/assets/graphics/Book/3.jpg" alt="" />
            <img src="/assets/graphics/Book/4.jpg" alt="" />
            <img src="/assets/graphics/Banner & Poster/3.jpg" alt="" />
            <img src="/assets/graphics/Podcast & Album/6.jpg" alt="" />
            <img src="/assets/graphics/Podcast & Album/7.jpg" alt="" />
          
        </motion.div>
    </div>
  )
}

export default Graphics_gallery
