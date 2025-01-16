import AboutSection from "../components/sections/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20 pb-28 gap-16">
      <div className="container">
        <h1 className="relative w-fit mx-auto text-4xl text-globalColor0 group">
          We Are Starwood For Timber
          {/* Line => border */}
          <span className="block h-[1px] mt-6 w-2/3 bg-globalColor0 bg-opacity-30"></span>
          {/* Ball */}
          <span className="absolute bottom-1/2 translate-y-1/2 left-0 h-5 w-5 bg-globalColor0 bg-opacity-25 shadow-2xl rounded-full group-hover:left-[97%] transition-all"></span>
        </h1>
      </div>
      <AboutSection />
    </div>
  );
};

export default About;
