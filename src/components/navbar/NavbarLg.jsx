import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMagnifyingGlass,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

function NavbarLg() {
  const [serMenu, setSerMenu] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const serRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
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
    document.addEventListener("click", handleClickOutSer);
    document.addEventListener("click", handleClickOutLang);
    return () => {
      document.removeEventListener("click", handleClickOutLang);
      document.removeEventListener("click", handleClickOutSer);
    };
  });
  return (
    <nav className="lg:flex hidden items-center justify-between w-full">
      <ul className="flex gap-4 justify-center items-center pl-12">
        <li className="nav-link">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/about"
          >
            About
          </Link>
        </li>
        <li
          ref={serRef}
          className="nav-link flex gap-2 items-center justify-center group hover:cursor-pointer"
          onMouseOver={() => {
            setSerMenu(true);
          }}
        >
          <div className="text-globalColor2 group-hover:text-globalColor0 text-md transition">
            Activities
          </div>
          <IoIosArrowUp
            className={`group-hover:text-globalColor0 text-md text-globalColor2 transition ${
              serMenu ? "" : "rotate-180"
            }`}
          />
          {/* Start Services menu */}
          <ul
            className={`absolute z-50 top-full flex-col gap-3 opacity-0 min-w-36 min-h-fit py-6 px-2 bg-globalColor8 transition ${
              serMenu
                ? "translate-y-0 opacity-100 flex opacity-1"
                : "-translate-y-full opacity-0"
            }`}
          >
            <li className="nav-link">
              <Link
                className="text-globalColor2 hover:text-globalColor0 text-md transition"
                to="/wood"
              >
                Wood
              </Link>
            </li>
            <li className="nav-link">
              <Link
                className="text-globalColor2 hover:text-globalColor0 text-md transition"
                to="/wood-works"
              >
                Wood Works
              </Link>
            </li>
          </ul>
          {/* End Services menu */}
        </li>
        <li className="nav-link">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li
          ref={langRef}
          className="nav-link flex gap-2 items-center justify-center group hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent propagation to the document click handler
            setLangMenu((prev) => !prev);
          }}
        >
          <div className="text-globalColor2 group-hover:text-globalColor0 text-md transition">
            English
          </div>
          <IoIosArrowUp
            className={`group-hover:text-globalColor0 text-md text-globalColor2 transition ${
              langMenu ? "" : "rotate-180"
            }`}
          />
          {/* Start English menu */}
          <ul
            className={`absolute z-50 top-full flex-col gap-3 opacity-0 min-w-36 min-h-fit py-6 px-2 bg-globalColor8 transition ${
              langMenu
                ? "translate-y-0 opacity-100 flex opacity-1"
                : "-translate-y-full opacity-0"
            }`}
          >
            <li className="nav-link">
              <Link
                className="text-globalColor2 hover:text-globalColor0 text-md transition"
                to="/home-en"
              >
                English
              </Link>
            </li>
          </ul>
          {/* End English menu */}
        </li>
        <li className="nav-link">
          <Link
            className="text-globalColor2 hover:text-globalColor0 text-md transition"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4 text-3xl text-globalColor2">
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
}

export default NavbarLg;
