import { useState } from "react";
import imgSrc from "../assets/images/careers/careers.jpg";
import CareersForm from "../components/careers/CareersForm";
import MainTitle from "../components/minicomponents/MainTitle";

const Careers = () => {
  const [submitDone, setSubmitDone] = useState(false);

  const submitMsg = "Your message has been sent successfully!";

  return (
    <div className="bg-globalColor1 py-16 min-h-screen text-white">
      <MainTitle title={"We Are Starwood For Timber"} />
      <div className="container grid grid-cols-2 gap-8">
        <div className="col-span-1 px-16">
          <img src={imgSrc} alt="" />
        </div>
        <div className="col-span-1">
          {!submitDone ? (
            <CareersForm setSubmitDone={setSubmitDone} />
          ) : (
            <div className="flex flex-col gap-8 group bg-white min-h-52 items-center justify-center px-6">
              <p className="text-lg font-semibold">{submitMsg}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
// git commit -m "removed the title for tha map in decorations & edited the map for form in careers"
