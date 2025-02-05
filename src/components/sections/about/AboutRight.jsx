import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

import { motion } from "framer-motion";

const AboutRight = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  const { t } = useTranslation("about");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      className="md:basis-6/12 flex flex-col gap-3"
    >
      <motion.p
        variants={itemVariants}
        className="text-xl font-semibold text-globalColor0"
      >
        {t("headTitle")}
      </motion.p>
      <motion.h1
        variants={itemVariants}
        className="text-xl font-semibold text-globalColor2"
      >
        {t("title")}
      </motion.h1>
      <ul className="about-list">
        <motion.li>
          <motion.p className="font-light my-3">
            <span className="text-xl font-semibold">{t("introOne")}</span>{" "}
            {t("timberText")}
          </motion.p>
        </motion.li>
        <motion.li variants={itemVariants}>
          <p className="font-light my-3">
            <span className="text-xl font-semibold">{t("introTwo")} </span>{" "}
            {t("decorsText")}
          </p>
        </motion.li>
      </ul>
      <motion.div
        variants={itemVariants}
        className="flex gap-2 items-center capitalize"
      >
        <FaCircleCheck className="text-blue-500" />
        <span>{t("companyStatus")}</span>
      </motion.div>
    </motion.div>
  );
};

export default AboutRight;
