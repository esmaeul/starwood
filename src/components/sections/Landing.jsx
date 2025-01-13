import { FaPhone } from "react-icons/fa6";
import LandingVideo from "../ui/LandingVideo";
import LandingForm from "./landing/LandingForm";

const Landing = () => {
  return (
    <section className="relative sm:mb-32 mb-16 md:h-[85vh] flex flex-col sm:px-36 md:justify-end justify-center bg-globalColor5">
      <div className="absolute top-0 left-0 w-full sm:h-5/6 h-3/6 bg-globalColor2">
        <LandingVideo />
      </div>
      {/* Start Landing Text */}
      <div className="z-10 mt-72">
        <div className="flex m-w-full flex-col lg:gap-6 gap-4 sm:-mt-0 -mt-36">
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
          <LandingForm />
        </div>
      </div>
    </section>
  );
};

export default Landing;
