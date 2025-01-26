import SocialIcons from "../minicomponents/SocialIcons";
import MenuLink from "./links/MenuLink";
import ServicesLi from "./services/ServicesLi";

import ksaFlag from "../../assets/shared/icons8-saudi-arabia-48.png";
import usaFlag from "../../assets/shared/icons8-usa-50.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function NavbarLg() {
  const { i18n } = useTranslation();
  const { t } = useTranslation("navbar");
  const [showLang, setShowLang] = useState(false);
  const [language, setLanguage] = useState("");

  const handleLangFocus = () => {
    setShowLang(true);
  };
  const handleLangBlur = () => {
    setShowLang(false);
  };

  const switchLanguage = (lang) => {
    console.log("Switching to:", lang);
    window.localStorage.setItem("language", lang);
    setLanguage(lang);
    i18n.changeLanguage(lang); // Dynamically switch languages
  };

  useEffect(() => {
    if (!window.localStorage.getItem("language")) {
      window.localStorage.setItem("language", "en");
      setLanguage("en");
    } else {
      setLanguage(window.localStorage.getItem("language"));
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  return (
    <nav className="lg:flex hidden items-center justify-between w-full text-lg">
      <ul className="flex justify-center items-center pl-12">
        <MenuLink name={t("home")} path={"/home"} />
        <MenuLink name={t("about")} path={"/about"} />
        <ServicesLi />
        <MenuLink name={t("projects")} path={"/projects"} />
        <MenuLink name={t("careers")} path={"/careers"} />
        <MenuLink name={t("contact")} path={"/contact"} />
      </ul>
      <div className="flex items-center gap-3">
        <SocialIcons />
        <div
          className="relative py-7 cursor-pointer"
          onClick={() => setShowLang(!showLang)}
          onMouseLeave={handleLangBlur}
          onFocus={handleLangFocus}
          onBlur={handleLangBlur}
        >
          {language === "en" ? (
            <span className="flex items-center gap-1.5 text-lg">
              <img src={usaFlag} alt="usa flag" className="w-6 h-6" />
              EN
            </span>
          ) : language === "ar" ? (
            <span className="flex items-center gap-1.5 text-lg">
              <img src={ksaFlag} alt="usa flag" className="w-6 h-6" />
              عربي
            </span>
          ) : (
            ""
          )}
          <ul
            className={`absolute z-50 left-0 top-[101%] flex-col opacity-0 py-1.5 text-nowrap bg-globalColor8 border-t-2 border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl min-w-24 ${
              showLang
                ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
                : "-translate-y-6 opacity-0 pointer-events-none"
            }`}
          >
            <li>
              <button
                onClick={() => switchLanguage("en")}
                className="flex items-center gap-2 px-3 my-2 hover:text-globalColor0 transition-all"
              >
                <img src={usaFlag} alt="usa flag" className="w-6 h-6" />
                EN
              </button>
            </li>
            <li>
              <button
                onClick={() => switchLanguage("ar")}
                className="flex items-center gap-2 px-3 my-2 hover:text-globalColor0 transition-all"
              >
                <img src={ksaFlag} alt="usa flag" className="w-6 h-6" />
                عربي
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLg;
