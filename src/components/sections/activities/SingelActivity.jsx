import { motion } from "framer-motion";

const SingelActivity = ({ imgSrc, imgAlt, title, desc }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="service lg:col-span-1 h-fit transparent text-globalColor5 p-3 rounded-md hover:bg-inherit lg:hover:scale-x-110 hover:scale-105 hover:shadow-2xl transition"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05 }}
    >
      {/* Img */}
      <div className="w-full h-96 p-1.5 group-hover:bg-globalColor1 overflow-hidden">
        <img className="object-cover h-full w-full" src={imgSrc} alt={imgAlt} />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-between gap-6">
        <motion.h2 className="text-2xl mt-3" variants={itemVariants}>
          {title}
        </motion.h2>
        <motion.p
          className="text-globalColor4 text-lg font-light"
          variants={itemVariants}
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SingelActivity;
