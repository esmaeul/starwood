import { FaBars } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import NavbarLg from "../components/navbar/NavbarLg";
import NavbarSm from "../components/navbar/NavbarSm";
import { useState } from "react";
import logo from "../../src/assets/shared/logo.png";
import Footer from "../components/footer/Footer";

const Root = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <header className="fixed flex top-0 w-full bg-globalColor5 shadow-md z-40 select-none">
        <div className="container flex items-center justify-between min-h-full transition">
          {/* Start Logo */}
          <Link to="/">
            <img className="sm:h-28 h-24" src={logo} alt="logo" />
          </Link>
          {/* End Logo */}
          <div
            className="bg-globalColor0 lg:hidden block text-globalColor8 p-3 text-xl rounded-sm cursor-pointer"
            onClick={handleShowMenu}
          >
            <FaBars />
          </div>
          <NavbarLg />
        </div>
      </header>
      <NavbarSm
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
      />
      <div className="outlet flex flex-col sm:mt-28 mt-24">
        <Outlet />
        <div
          className={`fixed left-0 top-0 h-full bg-black opacity-35 z-40 ${
            showMenu ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
      {/* <!-- Start Footer --> */}
      <Footer />
      {/* <!-- End Footer --> */}
    </div>
  );
};

export default Root;
