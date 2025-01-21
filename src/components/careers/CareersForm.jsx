import { useState } from "react";

const CareersForm = ({ setSubmitDone }) => {
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
        placeholder="Enter your full name"
        aria-label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder="Phone Number"
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
        placeholder="Your email"
        aria-label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder="Enter your job"
        aria-label="job dispcription"
        value={msgTitle}
        onChange={(e) => setMsgTitle(e.target.value)}
        required
      />
      <textarea
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none resize-none min-h-32 transition-all"
        placeholder="Message"
        aria-label="name"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        required
      ></textarea>
      <button
        className={`px-3 py-2 border hover:border-opacity-50 transition-all bg-globalColor4 ${
          canSubmit
            ? "border-globalColor4 border-opacity-10 text-white bg-globalColor0 bg-opacity-85 hover:bg-opacity-100"
            : "border-globalColor2 border-opacity-10"
        }`}
        type="submit"
        onClick={handleSumbitClick}
      >
        Send
      </button>
    </form>
  );
};

export default CareersForm;
