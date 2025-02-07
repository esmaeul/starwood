import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LandingForm = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const { t } = useTranslation("home");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    setSubmitted(false);
  }, []);

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      className="-mb-36 lg:px-16 lg:py-24 py-8 px-0 lg:text-left text-center bg-globalColor8 text-globalColor2 sm:shadow-lg rounded-lg flex lg:flex-row flex-col lg:gap-5 items-center justify-center focus-within:bg-globalColor5 hover:bg-globalColor5 hover:shadow-none focus-within:shadow-none transition-all"
    >
      <div className="flex flex-col lg:basis-5/12 md:basis-6/12 basis-full lg:gap-0 gap-2 lg:mb-0 mb-6">
        <motion.p
          variants={itemVariants}
          className="text-globalColor0 font-semibold"
        >
          {t("landingFormTitle")}
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="lg:text-3xl md:text-2xl text-lg font-semibold"
        >
          {t("landingFormSubtitle")}
        </motion.h1>
      </div>
      {!submitted ? (
        <div className="relative input-group flex lg:flex-row flex-col lg:basis-7/12 md:gap-6 md:mt-0 gap-6 mt-6 sm:basis-6/12 basis-full">
          <input
            className="sm:w-full py-2 px-3 w-full text-lg border border-globalColor7 shadow-sm rounded-sm outline-none border-opacity-70 focus:border-opacity-100 focus:border-globalColor0"
            type="text"
            placeholder={t("landingFormName")}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="sm:w-full py-2 px-3 w-full text-lg border border-globalColor7 shadow-sm rounded-sm outline-none border-opacity-70 focus:border-opacity-100 focus:border-globalColor0"
            type="tel"
            placeholder={t("landingFormNumber")}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className={`"sm:w-full py-2 px-3 w-full text-lg bg-globalColor0 border  shadow-sm rounded-sm text-white transition-all duration-700" ${
              (name, phone)
                ? "bg-opacity-100 border-globalColor1"
                : "bg-opacity-55 border-globalColor7"
            }`}
            type="submit"
            onClick={handleSubmit}
          >
            {t("landingFormSubmit")}
          </button>
        </div>
      ) : (
        <div className="relative input-group flex lg:flex-row flex-col gap-4 lg:basis-7/12 sm:basis-6/12 basis-full">
          <h1 className="text-globalColor0 text-xl font-semibold my-12">
            {t("msgSent")}
          </h1>
        </div>
      )}
    </motion.form>
  );
};

export default LandingForm;
