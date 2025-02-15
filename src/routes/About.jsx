// About.jsx
import { useTranslation } from "react-i18next";
import MainTitle from "../components/minicomponents/MainTitle";
import AboutRoute from "./about/AboutRoute";


const About = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="min-h-screen flex flex-col pt-10">
        <div className="container">
          <MainTitle title={t("title")} />
        </div>
        <AboutRoute />
      </div>
    </div>
  );
};

export default About;
