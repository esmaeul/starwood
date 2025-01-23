import { FaWhatsappSquare } from "react-icons/fa";
const WhatsappBtn = () => {
  return (
    <div className="group fixed z-50 sm:bottom-20 sm:right-16 bottom-12 right-10 bg-green-800 bg-opacity-40 rounded-xl shadow-lg hover:bg-opacity-100 cursor-pointer transition-all">
      <FaWhatsappSquare className="text-4xl text-green-800 m-3 group-hover:text-white" />
    </div>
  );
};

export default WhatsappBtn;
