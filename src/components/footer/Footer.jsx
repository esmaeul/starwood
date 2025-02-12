import { useTranslation } from "react-i18next";
import footerLogo from "../../assets/shared/logo.png";
import SocialIcons from "../minicomponents/SocialIcons";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="min-h-24 bg-globalColor2 py-2 text-white">
      <div className="container section flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <div
            className="cursor-pointer md:h-14 lg:w-14 h-12 w-12 rounded-sm overflow-hidden"
            onClick={() =>
              scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              className="h-full w-full object-contain"
              src={footerLogo}
              alt="this is our logo"
            />
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="manual-border"></div>
      <div className="container section">
        <div className="down text-white flex md:gap-3 gap-1.5 md:justify-between justify-center items-center pt-8">
          <p className="uppercase md:text-xl text-md">{t("title")}</p>
          <p className="uppercase md:text-xl text-md">{t("subTitle")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
