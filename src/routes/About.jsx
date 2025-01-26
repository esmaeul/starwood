// About.jsx
import { useTranslation } from "react-i18next";
import MainTitle from "../components/minicomponents/MainTitle";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <div className="min-h-screen flex flex-col pt-10">
        <div className="container">
          <MainTitle title={t("title")} />
        </div>
      </div>
    </div>
  );
};

export default About;
