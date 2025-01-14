import { FaPhone } from "react-icons/fa6";
import landingVideo from "../../assets/videos/landing/awesome-video.mp4";

const LandingVideo = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        src={landingVideo}
        className="w-full h-full object-cover"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Landing video showcasing our Team and services"
      >
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default LandingVideo;
