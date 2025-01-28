import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

const AboutRight = () => {
  const { t } = useTranslation("about");

  return (
    <div className="md:basis-6/12 flex flex-col gap-3">
      <p className="text-xl font-semibold text-globalColor0">
        {t("headTitle")}
      </p>
      <h1 className="text-xl font-semibold text-globalColor2">{t("title")}</h1>
      <ul className="about-list">
        <li>
          <p className="font-light my-3">
            <span className="text-xl font-semibold">{t("introOne")}</span>{" "}
            {t("timberText")}
          </p>
        </li>
        <li>
          <p className="font-light my-3">
            <span className="text-xl font-semibold">{t("introTwo")} </span>{" "}
            {t("decorsText")}
          </p>
        </li>
      </ul>
      <div className="flex gap-2 items-center capitalize">
        <FaCircleCheck className="text-blue-500" />
        <span>{t("companyStatus")}</span>
      </div>
    </div>
  );
};

export default AboutRight;
