import usaFlag from "../../assets/shared/icons8-usa-50.png";

import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMagnifyingGlass,
  FaXmark,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarSm = ({ handleShowMenu, showMenu, setShowMenu }) => {
  const navRef = useRef(null);
  const [serMenu, setSerMenu] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const serRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    const handleClickOutSer = (e) => {
      if (serRef.current && !serRef.current.contains(e.target)) {
        setSerMenu(false);
      }
    };
    const handleClickOutLang = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutLang);
      document.removeEventListener("click", handleClickOutSer);
    };
  });

  return (
    <nav
      ref={navRef}
      className={`absolute top-0 min-h-screen w-9/12 transition bg-globalColor5 z-40 ${
        showMenu ? "left-0 transition-all" : "-left-full transition-all"
      }`}
    >
      <div
        className="p-2 border border-globalColor3 text-globalColor2 w-fit absolute right-2 top-2 rounded-md text-2xl cursor-pointer hover:text-red-500 hover:border-red-500 transition group"
        onClick={handleShowMenu}
      >
        <FaXmark className="group-hover:scale-125" />
      </div>
      <ul
        className="flex flex-col my-20 px-10"
        onClick={(e) => {
          // Close the menu if the clicked element is a link
          if (e.target.tagName === "A") {
            setShowMenu(false);
          }
        }}
      >
        <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/about"
          >
            About
          </Link>
        </li>
        <li
          ref={serRef}
          className="flex items-center gap-1.5 group hover:cursor-pointer my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold"
          onClick={() => {
            setSerMenu((prev) => !prev);
          }}
        >
          {" "}
          <Link to="/activities" onClick={() => setShowMenu(false)}>
            <div className="relative text-globalColor2 group-hover:text-globalColor0 text-md transition">
              Activities
            </div>
          </Link>
          <IoIosArrowUp
            className={`group-hover:text-globalColor0 text-md text-globalColor2 ${
              serMenu ? "" : "rotate-180"
            }`}
          />
        </li>
        {/* Start services menu */}
        {serMenu && (
          <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
            <Link
              className="text-globalColor2 hover:text-globalColor0 text-md transition"
              to="/wood"
            >
              Wood
            </Link>
          </li>
        )}
        {serMenu && (
          <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
            <Link
              className="text-globalColor2 hover:text-globalColor0 text-md transition"
              to="/wood-works"
            >
              Wood Works
            </Link>
          </li>
        )}
        {/* End services menu */}
        <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li
          ref={langRef}
          className="flex items-center gap-1.5 group hover:cursor-pointer my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold"
          onClick={() => {
            setLangMenu((prev) => !prev);
          }}
        >
          <Link
            to="/home"
            className="flex gap-2 items-center"
            onClick={() => setShowMenu(false)}
          >
            <div className="relative text-globalColor2 group-hover:text-globalColor0 text-md transition">
              English
            </div>
            <img
              src={usaFlag}
              alt="flag"
              className="w-8 h-8 opacity-50 group-hover:opacity-100 transition"
            />
          </Link>
          <IoIosArrowUp
            className={`group-hover:text-globalColor0 text-md text-globalColor2 ${
              langMenu ? "" : "rotate-180"
            }`}
          />
          {/* Start English menu */}
        </li>
        {langMenu && (
          <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
            <Link
              className="flex gap-2 items-center"
              onClick={() => setShowMenu(false)}
            >
              <div className="relative text-globalColor2 group-hover:text-globalColor0 text-md transition">
                English
              </div>
              <img
                src={usaFlag}
                alt="flag"
                className="w-8 h-8 opacity-50 group-hover:opacity-100 transition"
              />
            </Link>
          </li>
        )}
        {/* End English menu */}
        <li className="my-3 text-lg border-b border-b-globalColor3 pb-2 pl-1.5 font-semibold">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4 text-3xl text-globalColor2 mx-auto px-10 w-fit border-t border-t-globalColor1 pt-5">
        <li className="facebook">
          <Link
            className="text-globalColor2 hover:text-facbookColor text-md transition"
            to="/Face"
          >
            <FaFacebook />
          </Link>
        </li>
        <li className="youtube">
          <Link
            className="text-globalColor2 hover:text-youtubeColor text-md transition"
            to="/you"
          >
            <FaYoutube />
          </Link>
        </li>
        <li className="instagram">
          <Link
            className="text-globalColor2 hover:text-instaColor text-md transition"
            to="/insta"
          >
            <FaInstagram />
          </Link>
        </li>
        <li className="search">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/"
          >
            <FaMagnifyingGlass />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSm;
