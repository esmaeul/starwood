import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/shared/logo.png";

const Footer = () => {
  return (
    <footer className="h-48 bg-globalColor2 pt-8">
      <div className="container section flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <div className="logo">
            <img
              className="h-20 w-20 rounded-sm"
              src={footerLogo}
              alt="this is our logo"
            />
          </div>
          <ul className="flex gap-4 text-3xl text-white">
            <li className="facebook">
              <Link
                className="text-white hover:text-facbookColor text-md transition"
                to="/Face"
              >
                <FaFacebook />
              </Link>
            </li>
            <li className="youtube">
              <Link
                className="text-white hover:text-youtubeColor text-md transition"
                to="/you"
              >
                <FaYoutube />
              </Link>
            </li>
            <li className="instagram">
              <Link
                className="text-white hover:text-instaColor text-md transition"
                to="/insta"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="search">
              <Link
                className="text-white hover:text-globalColor0 text-md transition"
                to="/"
              >
                <FaMagnifyingGlass />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="manual-border"></div>
      <div className="container section">
        <div className="down text-white flex justify-between pt-8">
          <p>Copyright © 2025</p>
          <p>Powered By Abdullah Arafa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
