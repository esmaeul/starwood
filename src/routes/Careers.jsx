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
        <div className="lg:col-span-1 col-span-full px-16 overflow-hidden">
          <img
            src={imgSrc}
            className="h-full w-full object-contain"
            alt="applying image"
          />
        </div>
        <div className="lg:col-span-1 col-span-full lg:w-full sm:w-4/6 w-full mx-auto">
          <h1 className="text-center font-semibold text-globalColor0 text-3xl mb-6">
            {t("formTitle")}
          </h1>
          {!submitDone ? (
            <CareersForm setSubmitDone={setSubmitDone} />
          ) : (
            <div className="flex flex-col gap-8 group bg-globalColor5 min-h-52 items-center justify-center px-6">
              <p className="text-xl text-globalColor0 font-semibold">
                {t("msgSent")}
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
