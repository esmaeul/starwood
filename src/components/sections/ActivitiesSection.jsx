import SingelActivity from "./activities/SingelActivity";

import germanBeech from "../../assets/images/activities/German Beech.jpg";
import swedish from "../../assets/images/activities/Swedish Wood.jpg";
import austrianBoards from "../../assets/images/activities/Austrian Boards.png";
import austrianTimberBeams from "../../assets/images/activities/Austrian Timber Beams.png";
import regularOakWood from "../../assets/images/activities/Regular Oak Wood.png";
import paintedBoards from "../../assets/images/activities/Starwood Painted Boards.jpg";
import ordinaryMDF from "../../assets/images/activities/Green MDF (Medium Density Fiberboard).png";
import fireMDF from "../../assets/images/activities/Fire-Resistant MDF.jpg";
import regularMDF from "../../assets/images/activities/Regular MDF.png";
import exteriorDoor from "../../assets/images/activities/2.webp";
import cladding from "../../assets/images/activities/11.png";
import InteriorDoor from "../../assets/images/activities/Door.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ActivitiesSection = () => {
  const { t } = useTranslation("services");

  return (
    <section
      id="Activities"
      className="SingelActivity min-h-screen bg-globalColor1 mt-16 py-6 pt-16"
    >
      <div className="container section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="sm:text-5xl text-3xl text-globalColor0">{t("title")}</h2>
          <p className="text-white my-6 mx-auto w-fit font-light capitalize">
            {t("description")}
          </p>
        </div>
        <SingelActivity
          imgSrc={germanBeech}
          imgAlt={"German beech wood"}
          title={t("ser1Title")}
          desc={t("ser1Text")}
        />
        <SingelActivity
          imgSrc={swedish}
          imgAlt={"Swedish Wood"}
          title={t("ser2Title")}
          desc={t("ser2Text")}
        />
        <SingelActivity
          imgSrc={regularOakWood}
          imgAlt={"American Red Oak"}
          title={t("ser3Title")}
          desc={t("ser3Text")}
        />
        <SingelActivity
          imgSrc={austrianBoards}
          imgAlt={"Austrian White"}
          title={t("ser4Title")}
          desc={t("ser4Text")}
        />
        <SingelActivity
          imgSrc={austrianTimberBeams}
          imgAlt={"Austrian Timber"}
          title={t("ser5Title")}
          desc={t("ser5Text")}
        />
        <SingelActivity
          imgSrc={paintedBoards}
          imgAlt={"Film-Faced plywood Starwood WBP"}
          title={t("ser6Title")}
          desc={t("ser6Text")}
        />
        <SingelActivity
          imgSrc={fireMDF}
          imgAlt={"Austrian Timber Beams"}
          title={t("ser7Title")}
          desc={t("ser7Text")}
        />
        <SingelActivity
          imgSrc={regularMDF}
          imgAlt={"Ordinary MDF"}
          title={t("ser8Title")}
          desc={t("ser8Text")}
        />
        <SingelActivity
          imgSrc={ordinaryMDF}
          imgAlt={"HMR MDF"}
          title={t("ser9Title")}
          desc={t("ser9Text")}
        />
        <SingelActivity
          imgSrc={exteriorDoor}
          imgAlt={"Exterior Door"}
          title={t("ser10Title")}
          desc={t("ser10Text")}
        />
        <SingelActivity
          imgSrc={cladding}
          imgAlt={"Wall Cladding"}
          title={t("ser11Title")}
          desc={t("ser11Text")}
        />
        <SingelActivity
          imgSrc={InteriorDoor}
          imgAlt={"InteriorDoor"}
          title={t("ser12Title")}
          desc={t("ser12Text")}
        />
        {/* See More Link Button */}
        <div className="col-span-full place-content-center place-items-center text-center py-16">
          <Link
            to="/decorations"
            className="rounded-sm border text-white border-t-emerald-50 w-fit px-24 py-3 text-xl hover:bg-white hover:text-globalColor0 hover:border-globalColor0 transition"
          >
            {t("serLink")}
          </Link>
        </div>
        {/* End See More Link Button */}
      </div>
    </section>
  );
};

export default ActivitiesSection;
