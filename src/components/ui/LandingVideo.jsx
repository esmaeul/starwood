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
        controls={false}
        aria-label="Landing video showcasing our product or service"
      >
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black/50">
        <h1 className="lg:text-3xl text-xl font-semibold text-globalColor5 ml-5">
          We are Starwood Engineer Experts
        </h1>
        <p className="font-semiblod text-md text-globalColor5 ml-5">
          Engineering Experts
        </p>
        <a
          href="/tel:+966126930030"
          className="flex items-center gap-1.5 text-globalColor5 ml-5"
        >
          <FaPhone className="text-lg" /> +966 12 6930030
        </a>
      </div>
    </div>
  );
};

export default LandingVideo;
