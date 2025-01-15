import { FaPhone } from "react-icons/fa6";
import landingImage from "../../assets/images/landing/WhatsApp Image 2025-01-15 at 09.22.34_6c98b93e.jpg";

const LandingImage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <img
        src={landingImage}
        className="w-full h-full object-cover"
        aria-label="Landing image showcasing our logo"
      />
      {/* Optional Overlay Content */}
      <div className="absolute max-w-96 md:left-40 inset-0 flex gap-5 flex-col items-start justify-center text-white">
        <h1 className="lg:text-3xl text-xl font-semibold text-globalColor5 ml-5">
          We are Starwood Engineer Experts
        </h1>
        <p className="font-semiblod text-md text-globalColor5 ml-5">
          Engineering Experts
        </p>
        <a
          href="/tel:+966126930030"
          className="flex items-center gap-1.5 text-globalColor5 ml-5 bg-globalColor1 hover:bg-globalColor0 px-3 py-2 text-xl rounded-sm transition"
        >
          <FaPhone className="text-lg" /> +966 12 6930030
        </a>
      </div>
    </div>
  );
};

export default LandingImage;
