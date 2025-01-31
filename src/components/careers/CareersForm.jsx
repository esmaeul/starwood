import { useState } from "react";
import { useTranslation } from "react-i18next";

const CareersForm = ({ setSubmitDone }) => {
  const { t } = useTranslation("careers");

  const [name, setName] = useState("");
  const [telNum, setTelName] = useState("");
  const [email, setEmail] = useState("");
  const [msgTitle, setMsgTitle] = useState("");
  const [msg, setMsg] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i;

  console.log(typeof emailRegex);
  console.log(emailRegex);

  const canSubmit =
    [name, telNum, email, msgTitle, msg].every(Boolean) &&
    emailRegex.test(email);

  const handleSumbitClick = (e) => {
    e.preventDefault();

    if (!canSubmit || !emailRegex.test(email)) return;

    setSubmitDone(true);
  };

  return (
    <form className="flex flex-col gap-8 group text-black">
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder={t("formName")}
        aria-label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder={t("formPhone")}
        aria-label="phone number"
        value={telNum}
        onChange={(e) => {
          setTelName(e.target.value);
        }}
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="email"
        placeholder={t("formEmail")}
        aria-label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder={t("msgReason")}
        aria-label="job dispcription"
        value={msgTitle}
        onChange={(e) => setMsgTitle(e.target.value)}
        required
      />
      <textarea
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none resize-none min-h-32 transition-all"
        placeholder={t("msg")}
        aria-label="message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        required
      ></textarea>
      <button
        className={`px-3 py-4 font-semibold border hover:border-opacity-50 transition-all bg-globalColor5 ${
          canSubmit
            ? "border-globalColor4 border-opacity-10 text-globalColor0 bg-globalColor0 bg-opacity-85 hover:bg-opacity-100"
            : "border-globalColor2 border-opacity-10"
        }`}
        type="submit"
        onClick={handleSumbitClick}
      >
        {t("formSubmit")}
      </button>
    </form>
  );
};

export default CareersForm;
