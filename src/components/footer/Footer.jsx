import footerLogo from "../../assets/shared/logo.png";
import SocialIcons from "../minicomponents/SocialIcons";

const Footer = () => {
  return (
    <footer className="min-h-24 bg-globalColor2 py-2 text-white">
      <div className="container section flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <div
            className="cursor-pointer"
            onClick={() =>
              scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              className="h-20 w-20 rounded-sm"
              src={footerLogo}
              alt="this is our logo"
            />
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="manual-border"></div>
      <div className="container section">
        <div className="down text-white flex gap-3 justify-between items-center pt-8">
          <p className="uppercase text-xl">Copyright © 2025</p>
          <p className="uppercase text-xl">powered by Starwood</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
