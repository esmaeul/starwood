import SocialIcons from "../minicomponents/SocialIcons";
import MenuLink from "./links/MenuLink";
import ServicesLi from "./services/ServicesLi";

import ksaFlag from "../../assets/shared/icons8-saudi-arabia-48.png";
import usaFlag from "../../assets/shared/icons8-usa-50.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarLg() {
  const [showLang, setShowLang] = useState(false);

  const handleLangFocus = () => {
    setShowLang(true);
  };
  const handleLangBlur = () => {
    setShowLang(false);
  };

  return (
    <nav className="lg:flex hidden items-center justify-between w-full text-lg">
      <ul className="flex justify-center items-center pl-12">
        <MenuLink name={"Home"} path={"/home"} />
        <MenuLink name={"About"} path={"/about"} />
        <ServicesLi />
        <MenuLink name={"Projects"} path={"/projects"} />
        <MenuLink name={"Careers"} path={"/careers"} />
        <MenuLink name={"Contact Us"} path={"/contact"} />
      </ul>
      <div className="flex items-center gap-3">
        <SocialIcons />
        <div
          className="relative flex items-center gap-1.5 text-lg py-7 cursor-pointer"
          onClick={handleLangFocus}
          onMouseLeave={handleLangBlur}
          onFocus={handleLangFocus}
          onBlur={handleLangBlur}
        >
          <img src={usaFlag} alt="usa flag" className="w-6 h-6" />
          EN
          <ul
            className={`absolute z-50 left-0 top-[101%] flex-col opacity-0 py-1.5 text-nowrap bg-globalColor8 border-t-2 border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl min-w-20 ${
              showLang
                ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
                : "-translate-y-6 opacity-0 pointer-events-none"
            }`}
          >
            <li>
              <Link className="flex items-center gap-2 px-3 my-2 hover:text-globalColor0 transition-all">
                <img src={usaFlag} alt="usa flag" className="w-6 h-6" />
                EN
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 px-3 my-2 hover:text-globalColor0 transition-all">
                <img src={ksaFlag} alt="usa flag" className="w-6 h-6" />
                AR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLg;
