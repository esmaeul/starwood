import { FaMapMarkerAlt } from "react-icons/fa";
import starwoodStar from "../../../assets/images/about/star logo-hd.webp";
import arMap from "../../../assets/images/about/ar-map.webp";
import enMap from "../../../assets/images/about/en-map.webp";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import MotionContext from "../../../context/MotionContext";

const AboutLeft = () => {
  const { i18n } = useTranslation("about");

  const { containerVariants } = useContext(MotionContext);

  return i18n.language === "en" ? (
    <motion.div
      variants={containerVariants}
      viewport={{ amount: 0.5 }}
      initial="hidden"
      whileInView="visible"
      className="md:basis-6/12 md:h-full overflow-hidden relative"
    >
      <img src={enMap} alt="starwood map" className="max-w-full max-h-full" />
      {/* Jeddah */}
      <div className="absolute animate-bounce top-[59%] left-[18%] flex flex-col">
        <a href="https://maps.app.goo.gl/4wcrFf2DLzqg3LFL9" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Osfan */}
      <div className="absolute animate-bounce top-[52%] left-[28%] flex flex-col">
        <a href="https://maps.app.goo.gl/X1bAxwsXC18jZvRFA" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Bahra */}
      <div className="absolute animate-bounce top-[58%] left-[39%] flex flex-col">
        <a href="https://maps.app.goo.gl/JQLU5h6863UwQ6C26" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Riyadh */}
      <div className="absolute animate-bounce top-[49%] left-[47%] flex flex-col">
        <a href="https://maps.app.goo.gl/zJTM9mGehtUjkCgG9" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
    </motion.div>
  ) : (
    // End English Map
    // Start Arabic Map
    <motion.div
      variants={containerVariants}
      viewport={{ amount: 0.5 }}
      initial="hidden"
      whileInView="visible"
      className="md:basis-6/12 md:h-full overflow-hidden relative"
    >
      <img src={arMap} alt="starwood map" className="max-w-full max-h-full" />
      {/* Jeddah */}
      <div className="absolute animate-bounce top-[62%] left-[22%] flex flex-col">
        <a href="https://maps.app.goo.gl/4wcrFf2DLzqg3LFL9" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Osfan */}
      <div className="absolute animate-bounce top-[51%] left-[25%] flex flex-col">
        <a href="https://maps.app.goo.gl/X1bAxwsXC18jZvRFA" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Bahra */}
      <div className="absolute animate-bounce top-[57%] left-[29%] flex flex-col">
        <a href="https://maps.app.goo.gl/JQLU5h6863UwQ6C26" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Riyadh */}
      <div className="absolute animate-bounce top-[48%] left-[47%] flex flex-col">
        <a href="https://maps.app.goo.gl/zJTM9mGehtUjkCgG9" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-10 sm:h-10 w-6 h-6 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
    </motion.div>
  );
};

export default AboutLeft;
