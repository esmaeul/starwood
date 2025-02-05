import { FaMapMarkerAlt } from "react-icons/fa";
import starwoodMap from "../../../assets/images/about/cats1.png";
import starwoodStar from "../../../assets/images/about/star logo-hd.png";

import { motion } from "framer-motion";

const AboutLeft = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="md:basis-6/12 md:h-full overflow-hidden relative"
    >
      <img
        src={starwoodMap}
        alt="starwood map"
        className="max-w-full max-h-full"
      />
      {/* Jeddah */}
      <div className="absolute animate-bounce top-[58%] left-[18%] flex flex-col">
        <a href="https://maps.app.goo.gl/UdCniY4RYarYocEfA" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-11 sm:h-11 w-8 h-8 object-cover"
          />
          <FaMapMarkerAlt className=" absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Osfan */}
      <div className="absolute animate-bounce top-[50%] left-[25%] flex flex-col">
        <a href="https://maps.app.goo.gl/X1bAxwsXC18jZvRFA" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-11 sm:h-11 w-8 h-8 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className=" absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Bahra */}
      <div className="absolute animate-bounce top-[58%] left-[31%] flex flex-col">
        <a href="https://maps.app.goo.gl/JQLU5h6863UwQ6C26" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-11 sm:h-11 w-8 h-8 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
      {/* Riyadh */}
      <div className="absolute animate-bounce top-[46%] left-[45%] flex flex-col">
        <a href="https://maps.app.goo.gl/zJTM9mGehtUjkCgG9" target="_blank">
          <img
            src={starwoodStar}
            alt="starwood marker"
            className="sm:w-11 sm:h-11 w-8 h-8 rounded-2xl object-cover"
          />
          <FaMapMarkerAlt className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 text-red-600 text-md -z-10" />
        </a>
      </div>
    </motion.div>
  );
};

export default AboutLeft;
