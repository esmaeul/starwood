import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const images = import.meta.glob(
  "../../assets/images/trusted/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
  }
);
const trustedImgs = Object.values(images).map((img) => img.default);

const TrustedSection = () => {
  const { t } = useTranslation("trusted");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2, // Stagger the image animations
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="section bg-gray-100 min-h-52 border-b overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="container grid grid-cols-7 lg:gap-10 md:gap-10 sm:gap-4 gap-2 py-16 image-container">
        <motion.div
          className="lg:col-span-2 md:col-span-3 col-span-full mx-auto w-fit text-center flex justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-globalColor0 font-mono">
            {t("title")}
          </h1>
        </motion.div>
        {trustedImgs.map((imgSrc, index) => (
          <motion.div
            key={index}
            className="lg:col-span-1 col-span-2 select-none bg-white px-1.5 h-3/5 py-1.5 my-auto rounded-lg shadow-md transition-all duration-300" // Added transition-all
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.4, y: -5, transition: { duration: 0.3 } }} // Hover animation
          >
            <img
              src={imgSrc}
              alt={t(`trustedImage_${index}`)}
              className="w-full object-contain max-w-full max-h-full h-full my-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
