import { FaTools, FaUsers } from "react-icons/fa";
import Reason from "./WhyUs/Reason";
import {
  FaAward,
  FaClock,
  FaHandsClapping,
  FaRegHandPeace,
  FaThumbsUp,
} from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const WhyUsSection = () => {
  const { t } = useTranslation("whyus");

  return (
    <section id="why-us" className="why-us bg-globalColor4 min-h-screen py-16">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="main-heading col-span-full text-center gap-1.5">
          <h2 className="text-4xl font-semibold text-globalColor0">
            {t("title")}
          </h2>
          <p className="font-light my-4">{t("desc")}</p>
        </div>
        <Reason
          icon={<FaAward />}
          title={t("reason1Title")}
          desc={t("reason1Desc")}
        />
        <Reason
          icon={<FaUsers />}
          title={t("reason2Title")}
          desc={t("reason2Desc")}
        />
        <Reason
          icon={<FaClock />}
          title={t("reason3Title")}
          desc={t("reason3Desc")}
        />
        <Reason
          icon={<FaThumbsUp />}
          title={t("reason4Title")}
          desc={t("reason4Desc")}
        />
        <Reason
          icon={<FaRegHandPeace />}
          title={t("reason5Title")}
          desc={t("reason5Desc")}
        />
        <Reason
          icon={<FaHandsClapping />}
          title={t("reason6Title")}
          desc={t("reason6Desc")}
        />
        <Reason
          icon={<MdOutlineAutoGraph />}
          title={t("reason7Title")}
          desc={t("reason7Desc")}
        />
        <Reason
          icon={<GrUserExpert />}
          title={t("reason8Title")}
          desc={t("reason8Desc")}
        />
        <Reason
          icon={<FaTools />}
          title={t("reason9Title")}
          desc={t("reason9Desc")}
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
