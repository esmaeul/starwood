import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MotionContext from "../../context/MotionContext";
import { useContext } from "react";

const images = import.meta.glob(
  "../../assets/images/trusted/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const trustedImgs = Object.values(images).map((img) => img.default);

const TrustedSection = () => {
  const { t } = useTranslation("trusted");
  const { containerVariants, imageVariants, itemVariants } =
    useContext(MotionContext);

  return (
    <section className="section bg-gray-100 py-20 border-b overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="container mx-auto px-6 grid lg:grid-cols-7 grid-cols-6 gap-8 items-center"
      >
        {/* Title */}
        <div className="lg:col-span-2 md:col-span-3 row-span-4 col-span-full text-center">
          <motion.h1
            variants={itemVariants}
            className="lg:text-6xl md:text-5xl text-4xl font-bold text-globalColor1 font-mono"
          >
            {t("title")}
          </motion.h1>
        </div>
        {/* Logos */}
        {trustedImgs.map((imgSrc, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            className="lg:hidden col-span-2 bg-white shadow-lg flex justify-center items-center p-4 rounded-lg select-none hover:scale-125 transition-all duration-500"
          >
            <img
              src={imgSrc}
              alt={t(`trustedImage_${index}`)}
              className="w-28 h-28 object-contain"
            />
          </motion.div>
        ))}
        {/* First Row - 5 Images */}
        <div className="lg:col-span-5 lg:flex hidden justify-center gap-8">
          {trustedImgs.slice(0, 5).map((imgSrc, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              className="bg-white shadow-lg flex justify-center items-center p-4 rounded-lg select-none hover:scale-125 transition-all duration-500"
            >
              <img
                src={imgSrc}
                alt={t(`trustedImage_${index}`)}
                className="w-28 h-28 object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Second Row - Centered 3 Images */}
        <div className="lg:col-span-5 lg:flex hidden justify-center gap-8">
          {trustedImgs.slice(5).map((imgSrc, index) => (
            <motion.div
              key={index + 5}
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              className="bg-white shadow-lg flex justify-center items-center p-4 rounded-lg select-none hover:scale-125 transition-all duration-500"
            >
              <img
                src={imgSrc}
                alt={t(`trustedImage_${index + 5}`)}
                className="w-28 h-28 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedSection;
