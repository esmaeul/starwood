import usaFlag from "../../assets/shared/icons8-usa-50.png";
import ksaFlag from "../../assets/shared/icons8-saudi-arabia-48.png";

import { useContext, useEffect, useRef, useState } from "react";
import { FaInstagram, FaXmark, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import LanguageContext from "../../context/LanguageContext";
import SmMenuLink from "./navbarsmlinks/SmMenuLink";
import { useTranslation } from "react-i18next";

const NavbarSm = ({ showMenu, setShowMenu }) => {
  const { switchLanguage } = useContext(LanguageContext);
  const { t } = useTranslation("navbar");

  const navRef = useRef(null);
  const [serMenu, setSerMenu] = useState(false);
  const [doorsMenu, setDoorsMenu] = useState(false);
  const [langMenu, setLangMenu] = useState(false);

  const closeUls = () => {
    setShowMenu(false);
    setSerMenu(false);
    setDoorsMenu(false);
    setLangMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeUls();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 h-screen pb-20 w-9/12 transition bg-globalColor5 z-50 select-text overflow-y-auto ${
        showMenu ? "left-0 transition-all" : "-left-full transition-all"
      }`}
    >
      <div
        className="p-2 border border-globalColor3 text-globalColor2 w-fit absolute right-2 top-2 rounded-md text-2xl cursor-pointer hover:text-red-500 hover:border-red-500 transition group"
        onClick={() => closeUls()}
      >
        <FaXmark className="group-hover:scale-125" />
      </div>
      <ul
        className="flex flex-col my-20 px-10"
        onClick={(e) => {
          // Close the menu if the clicked element is a link
          if (e.target.tagName === "A") {
            closeUls();
          }
        }}
      >
        <SmMenuLink name={t("home")} path={"/home"} />
        <SmMenuLink name={t("about")} path={"/about"} />
        {/* Start Services /> */}
        <li className="flex items-center gap-1.5 my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
          <div
            className="flex gap-2 items-center group cursor-pointer"
            onClick={() => {
              setSerMenu((prev) => !prev);
            }}
          >
            <div className="text-globalColor2 group-hover:text-globalColor0 text-md transition">
              {t("services")}
            </div>
            <IoIosArrowUp
              className={`text-globalColor2 group-hover:text-globalColor0 text-md transition ${
                serMenu ? "" : "rotate-180"
              }`}
            />
          </div>
          {/* Start English menu */}
        </li>
        {/* Start services menu */}
        {serMenu && (
          <>
            <SmMenuLink name={t("interiorDesign")} path={"/interior-design"} />
            <li
              // ref={doorsRef}
              className="flex items-center gap-1.5 my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold"
            >
              <div
                className="flex gap-2 items-center group cursor-pointer"
                onClick={() => {
                  setDoorsMenu((prev) => !prev);
                }}
              >
                <div className="text-globalColor2 group-hover:text-globalColor0 text-md transition">
                  {t("doors")}
                </div>
                <IoIosArrowUp
                  className={`text-globalColor2 group-hover:text-globalColor0 text-md transition ${
                    doorsMenu ? "" : "rotate-180"
                  }`}
                />
              </div>
            </li>
            {doorsMenu && (
              <>
                <SmMenuLink name={t("interiorDoors")} path={"interior-doors"} />
                <SmMenuLink name={t("exteriorDoors")} path={"exterior-doors"} />
                <SmMenuLink
                  name={t("palaceResidential Doors")}
                  path={"palace-and-residential-doors"}
                />
                <SmMenuLink
                  name={t("officeCorporate Doors")}
                  path={"office-and-corporate-doors"}
                />
              </>
            )}
            <SmMenuLink
              name={t("exteriorDecorations")}
              path={"/exterior-decorations"}
            />
            <SmMenuLink
              name={t("stagesPlatforms")}
              path={"/stages-and-platforms"}
            />
            <SmMenuLink
              name={t("architecturalWork")}
              path={"/architectural-work"}
            />
          </>
        )}
        {/* End services menu */}
        <SmMenuLink name={t("projects")} path={"/projects"} />
        <SmMenuLink name={t("careers")} path={"/careers"} />
        <SmMenuLink name={t("contact")} path={"/contact"} />
        {/* Start Language menu */}
        <li className="flex items-center gap-1.5 my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
          <div
            className="flex gap-2 items-center group cursor-pointer"
            onClick={() => {
              setLangMenu((prev) => !prev);
            }}
          >
            <img
              src={
                window.localStorage.getItem("language") === "en"
                  ? usaFlag
                  : ksaFlag
              }
              alt="flag"
              className="w-8 h-8 opacity-50 group-hover:opacity-100 transition"
            />
            <div className="text-globalColor2 group-hover:text-globalColor0 text-md transition">
              {window.localStorage.getItem("language") === "en"
                ? "English"
                : "عربي"}
            </div>
            <IoIosArrowUp
              className={`text-globalColor2 group-hover:text-globalColor0 text-md transition ${
                langMenu ? "" : "rotate-180"
              }`}
            />
          </div>
          {/* Start English menu */}
        </li>
        {langMenu && (
          <>
            <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
              <button
                className="group flex items-center gap-2"
                onClick={() => {
                  setShowMenu(false);
                  switchLanguage("en");
                }}
              >
                <img
                  src={usaFlag}
                  alt="flag"
                  className="w-8 h-8 opacity-50 group-hover:opacity-100 transition"
                />
                <div className="relative text-globalColor2 group-hover:text-globalColor0 text-md transition">
                  English
                </div>
              </button>
            </li>
            <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
              <button
                className="group flex items-center gap-2"
                onClick={() => {
                  setShowMenu(false);
                  switchLanguage("ar");
                }}
              >
                <img
                  src={ksaFlag}
                  alt="flag"
                  className="w-8 h-8 opacity-50 group-hover:opacity-100 transition"
                />
                <div className="relative text-globalColor2 group-hover:text-globalColor0 text-md transition">
                  العربية
                </div>
              </button>
            </li>
          </>
        )}
        {/* End English menu */}
      </ul>
      <ul className="flex gap-4 text-3xl text-globalColor2 mx-auto px-10 w-fit border-b border-b-globalColor1 pb-5">
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
            className=" hover:text-twitterColor text-md transition"
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
    </nav>
  );
};

export default NavbarSm;
