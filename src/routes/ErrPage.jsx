import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavbarLg from "../components/navbar/NavbarLg";
import NavbarSm from "../components/navbar/NavbarSm";
import { useEffect, useState } from "react";
import logo from "../../src/assets/shared/logo.png";
import Footer from "../components/footer/Footer";

const ErrPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  // Sections Transitions
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (enteries, observer) => {
        enteries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <header className="fixed flex top-0 w-full bg-globalColor5 shadow-md z-30">
        <div className="container flex items-center justify-between min-h-full transition">
          {/* Start Logo */}
          <Link to="/">
            <img className="max-h-28" src={logo} alt="logo" />
          </Link>
          {/* End Logo */}
          <div
            className="bg-globalColor0 lg:hidden block text-globalColor8 p-3 text-xl rounded-sm cursor-pointer"
            onClick={handleShowMenu}
          >
            <FaBars />
          </div>
          <div
            className={`absolute left-0 top-0 h-full bg-black opacity-30 z-30 ${
              showMenu ? "w-full" : "w-0"
            }`}
          ></div>
          <NavbarLg />
          <NavbarSm
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            handleShowMenu={handleShowMenu}
          />
        </div>
      </header>
      <div className="flex min-h-screen flex-col mt-28 text-4xl font-bold text-globalColor0 text-center pt-20">
        Sorry, this is unterdoing!
        <div>
          {" "}
          go to back
          <Link className="pl-3 underline text-blue-800" to="/home">
            Home
          </Link>
        </div>
      </div>
      {/* <!-- Start Footer --> */}
      <Footer />
      {/* <!-- End Footer --> */}
    </div>
  );
};

export default ErrPage;
