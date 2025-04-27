import { motion } from "framer-motion";
import MotionContext from "../context/MotionContext";

import BahraMap from "../components/map/BahraMap";
import HeadOfficeMap from "../components/map/HeadOfficeMap";
import OsfanMap from "../components/map/OsfanMap";
import MapRiyadh from "../components/map/RiyadhMap";
import FactoryMap from "../components/map/FactoryMap";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useContext } from "react";

const Contact = () => {
  const { t } = useTranslation("contactRoute");
  const { containerVariants, itemVariants } = useContext(MotionContext);

  return (
    <div className="min-h-screen relative z-20 bg-globalColor4 bg-opacity-85 py-16 text-globalColor2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ amount: 0.5 }}
        className="container flex lg:flex-row flex-col-reverse items-center"
      >
        <div className="lg:basis-2/6 basis-full relative lg:my-0 mt-10">
          <div className="lg:fixed lg:top-1/4">
            <ul className="flex gap-4 text-3xl text-black ">
              <li className="youtube">
                <Link
                  className=" hover:text-youtubeColor text-md transition"
                  to="https://www.youtube.com/@StarWood-p1j"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li className="instagram">
                <Link
                  className=" hover:text-instaColor text-md transition"
                  to="https://www.instagram.com/starwood_10/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="twitter">
                <Link
                  className=" hover:text-sky-400 text-md transition"
                  to="https://x.com/StarW63512"
                  target="_blank"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li className="whats-app">
                <Link
                  className=" hover:text-green-400 text-md transition"
                  to="https://wa.me/966126930030"
                  target="_blank"
                >
                  <FaWhatsappSquare />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:basis-4/6 basis-full">
          <h1 className="text-7xl text-center mb-16 border-b w-fit mx-auto pb-16">
            {t("title")}
          </h1>
          <div className="w-screen bg-transparent flex flex-col text-globalColor0">
            <h1 className="text-center py-6 text-4xl font-semibold text-globalColor0">
              {t("headOffice")}
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
              className="container"
            >
              <HeadOfficeMap />
            </motion.div>
          </div>
          <div className="w-screen bg-transparent flex flex-col">
            <h1 className="text-center py-6 text-4xl font-semibold text-globalColor0">
              {t("factory")}
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
              className="container"
            >
              <FactoryMap />
            </motion.div>
          </div>
          <div className="w-screen bg-transparent flex flex-col">
            <h1 className="text-center py-6 text-4xl font-semibold text-globalColor0">
              {t("bahra")}
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
              className="container"
            >
              <BahraMap />
            </motion.div>
          </div>
          <div className="w-screen bg-transparent flex flex-col">
            <h1 className="text-center py-6 text-4xl font-semibold text-globalColor0">
              {t("osfan")}
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
              className="container"
            >
              <OsfanMap />
            </motion.div>
          </div>
          <div className="w-screen bg-transparent flex flex-col">
            <h1 className="text-center py-6 text-4xl font-semibold text-globalColor0">
              {t("riyadh")}
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true }}
              className="container"
            >
              <MapRiyadh />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
