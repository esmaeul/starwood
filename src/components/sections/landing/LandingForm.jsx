import { useState } from "react";
import { useTranslation } from "react-i18next";

const LandingForm = () => {
  const { t } = useTranslation("home");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  return (
    <form className="-mb-28 lg:px-16 lg:py-24 py-8 px-0 lg:text-left text-center bg-globalColor8 text-globalColor2 sm:shadow-lg rounded-lg flex lg:flex-row flex-col lg:gap-5 items-center justify-center focus-within:bg-globalColor5 hover:bg-globalColor5 hover:shadow-none focus-within:shadow-none transition-all">
      <div className="flex flex-col lg:basis-5/12 sm:basis-6/12 basis-full">
        <p className="text-globalColor0 font-semibold">
          {t("landingFormTitle")}
        </p>
        <h1 className="lg:text-3xl md:text-2xl text-lg font-semibold">
          {t("landingFormSubtitle")}
        </h1>
      </div>
      {!submitted ? (
        <div className="relative input-group flex lg:flex-row flex-col gap-4 lg:basis-7/12 sm:basis-6/12 basis-full">
          <input
            className="sm:w-auto py-2 px-3 w-full text-lg border border-globalColor7 shadow-sm rounded-sm outline-none border-opacity-70 focus:border-opacity-100 focus:border-globalColor0"
            type="text"
            placeholder={t("landingFormName")}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="sm:w-auto py-2 px-3 w-full text-lg border border-globalColor7 shadow-sm rounded-sm outline-none border-opacity-70 focus:border-opacity-100 focus:border-globalColor0"
            type="tel"
            placeholder={t("landingFormNumber")}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className="sm:w-auto py-2 px-3 w-full text-lg bg-globalColor0 border opacity-55 border-globalColor7 shadow-sm rounded-sm text-white"
            type="submit"
            onClick={handleSubmit}
          >
            {t("landingFormSubmit")}
          </button>
        </div>
      ) : (
        <div className="relative input-group flex lg:flex-row flex-col gap-4 lg:basis-7/12 sm:basis-6/12 basis-full">
          <h1 className="text-globalColor0 text-xl font-semibold">
            Thanks {name} for contacting us, your message has been sent
            successfully
          </h1>
        </div>
      )}
    </form>
  );
};

export default LandingForm;
