import LandingVideo from "@/app/ui/LandingVideo";
import { FaPhone } from "react-icons/fa6";

const Landing = () => {
  return (
    <section className="relative mt-24 mb-32 md:h-[85vh] flex flex-col px-36 md:justify-end justify-center bg-globalColor5">
      <div className="absolute top-0 left-0 w-full h-full bg-globalColor2">
        <LandingVideo />
      </div>
      {/* Start Landing Text */}
      <div className="z-10">
        <div className="flex m-w-full flex-col gap-6">
          <h1 className="text-3xl font-semibold text-globalColor5 ml-5">
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
          <form className="md:-mb-16 mb-0 p-10 bg-globalColor4 shadow-lg rounded-lg flex md:flex-row flex-col md:gap-5 items-center justify-center">
            <div className="flex flex-row sm:flex-col lg:basis-5/12 sm:basis-6/12 basis-full">
              <p className="text-globalColor0 font-semibold">
                Quick Service Request
              </p>
              <h1 className="text-3xl font-semibold">
                Send Inspection Request
              </h1>
            </div>
            <div className="relative input-group flex sm:flex-row flex-col gap-4 lg:basis-7/12 sm:basis-6/12 basis-full">
              <input
                className="sm:w-auto py-1.5 px-3 w-full text-lg bg-globalColor0 border bg-transparent border-globalColor7 shadow-sm rounded-sm"
                type="text"
                aria-placeholder="Name"
                required
              />
              <input
                className="sm:w-auto py-1.5 px-3 w-full text-lg bg-globalColor0 border bg-transparent border-globalColor7 shadow-sm rounded-sm"
                type="tel"
                aria-placeholder="Phone"
                required
              />
              <button
                className="sm:w-auto py-1.5 px-3 w-full text-lg bg-globalColor0 border opacity-55 border-globalColor7 shadow-sm rounded-sm text-white"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Landing;
