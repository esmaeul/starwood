import AboutLeft from "./about/AboutLeft";
import AboutRight from "./about/AboutRight";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="section container flex lg:flex-row flex-col gap-10 items-center justify-center">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
};

export default AboutSection;
