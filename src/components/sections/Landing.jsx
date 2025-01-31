import LandingForm from "./landing/LandingForm";
import LandingImage from "../ui/LandingImage";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation("home");
  const buttonClass =
    "w-52 flex items-center gap-1.5 text-globalColor5 bg-globalColor1 hover:bg-globalColor0 px-3 py-2 text-xl rounded-sm transition";

  return (
    <section className="landing relative mb-56 md:h-[85vh] flex flex-col md:justify-end justify-center bg-globalColor5 text-white">
      <div className="absolute top-0 left-0 w-full sm:h-full h-3/6">
        <LandingImage />
      </div>
      {/* Start Landing Text */}
      <div className="container z-20 mt-28">
        <div className="flex flex-col pb-10 gap-5">
          <h1 className="lg:text-3xl text-xl font-semibold">
            {t("landingTitle")}
          </h1>
          <p className="font-semibold text-md">{t("landingSubtitle")}</p>
          <div className="flex md:flex-row flex-col gap-5">
            <a
              href="tel:+966126930030"
              className={buttonClass}
              aria-label={t("landingTel")}
            >
              <FaPhone className="text-lg" /> {t("landingTel")}
            </a>
            <a
              href="mailto:info@starwood.sa"
              className={buttonClass}
              aria-label="Email Starwood"
            >
              <MdEmail className="text-xl" /> info@starwood.sa
            </a>
          </div>
        </div>
        <LandingForm />
      </div>
    </section>
  );
};

export default Landing;
