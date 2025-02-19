// About.jsx
import { useTranslation } from "react-i18next";
import MainTitle from "../components/minicomponents/MainTitle";
import AboutRoute from "./about/AboutRoute";

import { motion } from "framer-motion";
import { useContext } from "react";
import MotionContext from "../context/MotionContext";

const About = () => {
  const { t } = useTranslation("common");
  const { containerVariants } = useContext(MotionContext);

  return (
    <div>
      <div className="min-h-screen flex flex-col pt-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="container"
        >
          <MainTitle title={t("title")} />
        </motion.div>
        <AboutRoute />
      </div>
    </div>
  );
};

export default About;
