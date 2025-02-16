import LandingForm from "./landing/LandingForm";
import landingImage from "../../assets/images/landing/landing.webp";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useContext } from "react";
import MotionContext from "../../context/MotionContext";

const Landing = () => {
  const { containerVariants, itemVariants } = useContext(MotionContext);

  const { t } = useTranslation("home");
  const buttonClass =
    "w-52 flex items-center gap-1.5 text-globalColor5 bg-globalColor1 hover:bg-globalColor0 px-3 py-2 text-xl rounded-sm transition";

  return (
    <section className="landing relative mb-56 md:h-[85vh] flex flex-col md:justify-end justify-center bg-globalColor5 text-white">
      <div className="absolute top-0 left-0 w-full sm:h-full h-3/6">
        <div className="relative w-full h-full overflow-hidden">
          <div className="min-w-full h-full">
            <img
              src={landingImage}
              className="w-full h-full object-cover bg-center"
              aria-label="Landing image showcasing our logo"
            />
          </div>
        </div>
      </div>
      {/* Start Landing Text */}
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={containerVariants}
        className="container z-20 mt-28"
      >
        <div className="flex flex-col pb-10 gap-5">
          <motion.h1
            variants={itemVariants}
            className="lg:text-3xl text-xl font-semibold"
          >
            {t("landingTitle")}
          </motion.h1>
          <motion.p variants={itemVariants} className="font-semibold text-md">
            {t("landingSubtitle")}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex md:flex-row flex-col gap-5"
          >
            <motion.a
              variants={itemVariants}
              href="tel:+966126930030"
              className={buttonClass}
              aria-label={t("landingTel")}
            >
              <FaPhone className="text-lg" /> {t("landingTel")}
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="mailto:info@starwood.sa"
              className={buttonClass}
              aria-label="Email Starwood"
            >
              <MdEmail className="text-xl" /> info@starwood.sa
            </motion.a>
          </motion.div>
        </div>
        <LandingForm />
      </motion.div>
    </section>
  );
};

export default Landing;
