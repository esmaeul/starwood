import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <ul className="flex gap-4 text-3xl ">
      <li className="youtube">
        <Link
          className=" hover:text-youtubeColor text-md transition"
          to="https://www.youtube.com/@StarWood-p1j"
          target="_blank"
        >
          <FaYoutube />
        </Link>
      </li>
      <li className="instagram">
        <Link
          className=" hover:text-instaColor text-md transition"
          to="https://www.instagram.com/starwood_10/"
          target="_blank"
        >
          <FaInstagram />
        </Link>
      </li>
      <li className="twitter">
        <Link
          className=" hover:text-twitterColor text-md transition"
          to="https://x.com/StarW63512"
          target="_blank"
        >
          <FaXTwitter />
        </Link>
      </li>
      <li className="whats-app">
        <Link
          className=" hover:text-green-400 text-md transition"
          to="https://wa.me/966126930030"
          target="_blank"
        >
          <FaWhatsappSquare />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
