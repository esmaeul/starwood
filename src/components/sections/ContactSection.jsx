import { useContext, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./contact/ContactForm";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import MotionContext from "../../context/MotionContext";

const ContactSection = () => {
  const { containerVariants, itemVariants } = useContext(MotionContext);

  const { t } = useTranslation("contact");
  const [submitDone, setSubmitDone] = useState(false);

  return (
    <section id="contact" className="contact min-h-screen bg-globalColor5">
      <div className="title bg-globalColor7 h-80">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="container section h-full"
        >
          <div className="main-heading w-fit h-full flex flex-col justify-center items-center gap-6 mx-auto text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl text-white font-semibold"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-md font-light text-globalColor8"
            >
              {t("desc")}
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="container section flex sm:flex-row sm:text-start text-center flex-col sm:gap-3 justify-between"
      >
        <div className="sm:basis-1/2 basis-full">
          <div className="heading pt-16 ">
            <motion.p className="text-globalColor0 text-lg">
              {t("leftTitle")}
            </motion.p>
            <motion.h1 className="text-globalColor2 w-fit sm:mx-0 mx-auto text-4xl font-semibold">
              {t("leftDesc")}
              <div className="w-full my-6 h-[1px] bg-black"></div>
            </motion.h1>
          </div>
          <div className="time-table flex flex-col gap-4 text-start text-wrap sm:max-w-full max-w-96 sm:mx-0 mx-auto ">
            <motion.p variants={itemVariants}>{t("Address")}</motion.p>
            {t("country")}
            <motion.p variants={itemVariants}>
              <IoCall className="text-xl" /> {t("phone")}
            </motion.p>
            <motion.p variants={itemVariants}>
              <MdOutlineMailOutline className="text-xl" /> {t("email")}
            </motion.p>
          </div>
        </div>
        <div className="sm:basis-1/2 basis-full bg-globalColor5 md:border border-opacity-10 focus-within:border-opacity-50 border-globalColor2 md:-mt-16 my-8 min-h-full md:p-16">
          <div className="main-heading">
            <motion.p className="text-globalColor0 text-lg">
              {t("contactFormTitle")}
            </motion.p>
            <motion.h1 className="text-globalColor2 w-fit sm:mx-0 mx-auto text-4xl font-semibold">
              {t("contactFormDesc")}
              <div className="w-full my-6 h-[1px] bg-black"></div>
            </motion.h1>
          </div>
          {!submitDone ? (
            <ContactForm setSubmitDone={setSubmitDone} />
          ) : (
            <div className="">
              <h1 className="text-lg font-semibold text-globalColor0">
                {t("msgSent")}
              </h1>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
