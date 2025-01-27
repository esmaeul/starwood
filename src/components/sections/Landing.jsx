import LandingForm from "./landing/LandingForm";
import LandingImage from "../ui/LandingImage";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation("home");

  return (
    <section className="landing relative mb-56 md:h-[85vh] flex flex-col sm:px-36 md:justify-end justify-center bg-globalColor5 text-white">
      <div className="absolute top-0 left-0 w-full sm:h-5/6 h-3/6">
        <LandingImage />
      </div>
      {/* Start Landing Text */}
      <div className="container relative z-20">
        <div className="flex flex-col pb-10 gap-5 w-fit pr-6 py-5 rounded-xl shadow-lg transition-all duration-500">
          <h1 className="lg:text-3xl text-xl font-semibold ml-5">
            {t("landingTitle")}
          </h1>
          <p className="font-semiblod text-md ml-5">{t("landingSubtitle")}</p>
          <div className="flex md:flex-row flex-col md:gap-0 gap-5">
            {" "}
            <a
              href="tel:+966126930030"
              className="min-w-52 flex items-center gap-1.5 text-globalColor5 ml-5 bg-globalColor1 hover:bg-globalColor0 px-3 py-2 text-xl rounded-sm transition"
            >
              <FaPhone className="text-lg" /> {t("landingTel")}
            </a>
            <a
              className="min-w-52 flex items-center gap-1.5 text-globalColor5 ml-5 bg-globalColor1 hover:bg-globalColor0 px-3 py-2 text-xl rounded-sm transition"
              href="mailto:info@starwood.sa"
            >
              <MdEmail className="text-xl" />
              info@starwood.sa
            </a>
          </div>
        </div>
        <LandingForm />
      </div>
    </section>
  );
};

export default Landing;
