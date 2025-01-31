import AboutLeft from "../../components/sections/about/AboutLeft";
import AboutRight from "../../components/sections/about/AboutRight";

const AboutRoute = () => {
  return (
    <section id="about" className="about lg:mt-16 my-16">
      <div className="section container flex lg:flex-row flex-col gap-10 items-center justify-center">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
};

export default AboutRoute;
