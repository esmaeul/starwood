const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8 group">
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder="Enter your full name"
        aria-label="name"
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder="Phone Number"
        aria-label="phone number"
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="email"
        placeholder="Your email"
        aria-label="Email"
        required
      />
      <input
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none transition-all"
        type="text"
        placeholder="Service Description"
        aria-label="service description"
        required
      />
      <textarea
        className="border border-globalColor2 border-opacity-10 focus:border-opacity-50 py-2 px-3 text-lg w-full outline-none resize-none min-h-32 transition-all"
        placeholder="Message"
        aria-label="name"
        required
      ></textarea>
      <button
        className="px-3 py-2 border border-globalColor2 border-opacity-10 hover:border-opacity-50 transition-all"
        type="submit"
      >
        GET A FREE QUOTE
      </button>
    </form>
  );
};

export default ContactForm;
