import { useState } from "react";
import imgSrc from "../assets/images/careers/careers.jpg";
import CareersForm from "../components/careers/CareersForm";

const Careers = () => {
  const [submitDone, setSubmitDone] = useState(false);

  const submitMsg =
    "Please note that the website is still under development, so your message may not be read by our recruiters. To avoid this, feel free to call us!";

  return (
    <div className="bg-globalColor1 py-16 min-h-screen">
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
