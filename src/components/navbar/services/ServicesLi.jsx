import { useCallback, useEffect, useRef, useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import MenuLink from "../links/MenuLink";
import ServicesMenu from "./ServicesMenu";

const ServicesLi = () => {
  const [serMenu, setSerMenu] = useState(false);

  const serRef = useRef(null);
  const serSubmenuRef = useRef(null); // Ref for the submenu

  const handleSerrFocus = () => {
    setSerMenu(true);
    // After the submenu is rendered, focus on the first item
    setTimeout(() => {
      serSubmenuRef.current?.querySelector("li > a")?.focus();
    }, 0);
  };

  const handleSerBlur = () => {
    setSerMenu(false);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && serMenu) {
        setSerMenu(false);
        serRef.current.focus(); // Return focus to the parent link
        console.log("mission done!");
      }
    },
    [serMenu]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <li
      ref={serRef}
      className="relative group flex gap-2 items-center justify-center hover:cursor-pointer"
      onMouseOver={() => setSerMenu(true)}
      onMouseLeave={() => setSerMenu(false)}
      onFocus={handleSerrFocus}
      onBlur={handleSerBlur}
      aria-haspopup="true"
      aria-expanded={serMenu}
    >
      <MenuLink
        name={"Services"}
        path={"/services"}
        icon={
          <IoIosArrowUp
            className={`transition-all duration-150 ${
              serMenu ? "" : "rotate-180"
            }`}
          />
        }
      />
      {/* Start Services menu */}
      <ServicesMenu serMenu={serMenu} />
      {/* End Services menu */}
    </li>
  );
};

export default ServicesLi;
