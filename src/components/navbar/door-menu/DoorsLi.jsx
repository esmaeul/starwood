import { IoIosArrowForward } from "react-icons/io";
import DoorsMenu from "../door-menu/doorsMenu";
import { useRef, useState } from "react";
import SubmenuLink from "../links/SubmenuLink";

const DoorsLi = ({ onClose }) => {
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

  return (
    <li
      className="w-full flex hover:text-globalColor0"
      ref={doorsSubmenuRef}
      to="/doors"
      onFocus={handleDoorsFoucs}
      onBlur={handleDoorsBlur}
      onMouseOver={() => setDoorsMenu(true)}
      onMouseLeave={() => setDoorsMenu(false)}
      aria-haspopup="true"
      aria-expanded={doorsMenu}
    >
      <SubmenuLink
        onClose={onClose}
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
      <DoorsMenu onClose={onClose} doorsMenu={doorsMenu} />
      {/* End Doors Submenu */}
    </li>
  );
};

export default DoorsLi;
