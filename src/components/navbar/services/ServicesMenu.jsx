import { useRef, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

import SubmenuLink from "../links/SubmenuLink";
import { useTranslation } from "react-i18next";

const ServicesMenu = ({ serMenu, setSerMenu }) => {
  const { t } = useTranslation("navbar");
  const { i18n } = useTranslation("");

  const handleMenuClose = () => {
    setSerMenu(false);
  };

  const doorsSubmenuRef = useRef(null); // Ref for the submenu
  const [doorsMenu, setDoorsMenu] = useState(false);

  const handleDoorsFoucs = () => {
    setDoorsMenu(true);
    // After the submenu is rendered, focus on the first item
    setTimeout(() => {
      doorsSubmenuRef.current?.querySelector("li > a")?.focus();
    }, 0);
  };

  const handleDoorsBlur = () => {
    setDoorsMenu(false);
  };

  const handleDoorsClick = () => {
    setDoorsMenu(!doorsMenu); // Toggle submenu visibility on click
  };

  return (
    <ul
      className={`absolute z-50 left-0 top-[101%] flex-col opacity-0 py-1.5 text-nowrap bg-globalColor8 border-t-2 border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl ${
        serMenu
          ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
          : "-translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <SubmenuLink
        onClose={handleMenuClose}
        name={t("interiorDesign")}
        path={"/interior-design"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={t("interiorDecorations")}
        path={"/interior-decorations"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={t("exteriorDecorations")}
        path={"/exterior-decorations"}
      />
      {/* Start Doors Li */}
      <li
        className="w-full flex hover:text-globalColor0"
        ref={doorsSubmenuRef}
        onClick={handleDoorsClick} // Add onClick handler
        onFocus={handleDoorsFoucs}
        onBlur={handleDoorsBlur}
        onMouseOver={() => setDoorsMenu(true)}
        onMouseLeave={() => setDoorsMenu(false)}
        aria-haspopup="true"
        aria-expanded={doorsMenu}
      >
        <SubmenuLink
          onClose={handleMenuClose}
          name={t("doors")}
          path={"/doors"}
          icon={
            <IoIosArrowForward
              className={` ml-auto transition duration-150 ${
                doorsMenu ? "rotate-0 " : "rotate-90"
              }`}
            />
          }
        />
        {/* Start Doors Submenu */}
        <div
          className={`absolute z-50 top-1/2 py-1.5 flex-col opacity-0 min-w-fit text-nowrap bg-globalColor8 border-t border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl ${
            doorsMenu
              ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }
              ${i18n.language === "en" ? "left-full" : "right-full"}
              `}
        >
          <SubmenuLink
            onClose={handleMenuClose}
            name={t("interiorDoors")}
            path={"interior-doors"}
          />
          <SubmenuLink
            onClose={handleMenuClose}
            name={t("exteriorDoors")}
            path={"exterior-doors"}
          />
          <SubmenuLink
            onClose={handleMenuClose}
            name={t("palaceResidential Doors")}
            path={"palace-and-residential-doors"}
          />
          <SubmenuLink
            onClose={handleMenuClose}
            name={t("officeCorporate Doors")}
            path={"office-and-corporate-doors"}
          />
        </div>
        {/* Conditionally render DoorsMenu */}
        {/* End Doors Submenu */}
      </li>
      {/* End Doors Li */}
      <SubmenuLink
        onClose={handleMenuClose}
        name={t("stagesPlatforms")}
        path={"/stages-and-platforms"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={t("architecturalWork")}
        path={"/architectural-work"}
      />
    </ul>
  );
};

export default ServicesMenu;
