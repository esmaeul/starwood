import { useRef, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

import SubmenuLink from "../links/SubmenuLink";

const ServicesMenu = ({ serMenu, setSerMenu }) => {
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
        name={"Interior Design"}
        path={"/interior-design"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Interior Decorations"}
        path={"/interior-decorations"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Exterior Decorations"}
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
          name={"Doors"}
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
        <ul
          className={`absolute z-50 left-full top-1/2 py-1.5 flex-col opacity-0 min-w-fit text-nowrap bg-globalColor8 border-t border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl ${
            doorsMenu
              ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          <SubmenuLink
            onClose={handleMenuClose}
            name={"Interior Doors"}
            path={"interior-doors"}
          />
          <SubmenuLink
            onClose={handleMenuClose}
            name={"Exterior Doors"}
            path={"exterior-doors"}
          />
          <SubmenuLink
            onClose={handleMenuClose}
            name={"Palace & Residential Doors"}
            path={"palace-and-residential-doors"}
          />
          <SubmenuLink
            onClose={handleMenuClose}
            name={"Office & Corporate Doors"}
            path={"office-and-corporate-doors"}
          />
        </ul>
        {/* Conditionally render DoorsMenu */}
        {/* End Doors Submenu */}
      </li>
      {/* End Doors Li */}
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Stages & Platforms"}
        path={"/stages-and-platforms"}
      />
      <SubmenuLink
        onClose={handleMenuClose}
        name={"Architectural Work"}
        path={"/architectural-work"}
      />
    </ul>
  );
};

export default ServicesMenu;
