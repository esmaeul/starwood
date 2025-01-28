import { useState } from "react";
import imgSrc from "../assets/images/careers/careers.jpg";
import CareersForm from "../components/careers/CareersForm";
import MainTitle from "../components/minicomponents/MainTitle";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t } = useTranslation("common");

  const [submitDone, setSubmitDone] = useState(false);

  return (
    <div className="bg-globalColor4 py-16 min-h-screen text-globalColor2">
      <MainTitle title={t("title")} />
      <div className="container grid grid-cols-2 gap-8 mt-16">
        <div className="col-span-1 px-16">
          <img src={imgSrc} alt="" />
        </div>
        <div className="col-span-1">
          <h1 className="text-center font-semibold text-globalColor2 text-3xl mb-6">
            {t("formTitle")}
          </h1>
          {!submitDone ? (
            <CareersForm setSubmitDone={setSubmitDone} />
          ) : (
            <div className="flex flex-col gap-8 group bg-white min-h-52 items-center justify-center px-6">
              <p className="text-xl text-globalColor0 font-semibold">
                {t("msg")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
// git commit -m "removed the title for tha map in decorations & edited the map for form in careers"
