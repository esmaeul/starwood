/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import MotionContext from "../../../context/MotionContext";

const SingleDecor = ({ imgSrc, setCurrent }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = imgSrc;
    preloadImage.onload = () => setIsLoading(false);
  }, [imgSrc]);

  const { containerVariants, imageVariants } = useContext(MotionContext);

  return (
    <motion.div
      initial="hidden"
      whileInView={isLoading ? "hidden" : "visible"}
      variants={imageVariants}
      viewport={{ once: true }}
      onClick={setCurrent}
      className="decor col-span-1 w-full h-60 rounded-lg overflow-hidden shadow-md flex items-center justify-center"
    >
      <div
        className={`img w-full h-full cursor-pointer transition hover:scale-105 bg-gray-300 ${
          isLoading ? "animate-pulse" : ""
        }`}
      >
        {!isLoading && (
          <img
            src={imgSrc}
            alt="Decor"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  );
};

export default SingleDecor;
