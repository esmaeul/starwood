
// import Feedbacks from "../components/sections/Feedbacks";
import Landing from "../components/sections/Landing";
import AboutSection from "../components/sections/AboutSection";
import ActivitiesSection from "../components/sections/ActivitiesSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      {/* <!-- Start Landing --> */}
      <Landing />
      {/* <!-- End Landing --> */}
      {/* <!-- Start About --> */}
      <AboutSection />
      {/* <!-- End About --> */}
      {/* <!-- Start Services --> */}
      <ActivitiesSection />
      {/* <!-- End Services --> */}
      {/* <!-- Staert Why us --> */}
      <WhyUsSection />
      {/* <!-- End Why us --> */}
      {/* <!-- Start Contact pre-Footer--> */}
      <ContactSection />
      {/* <!-- End Contact pre-Footer--> */}
    </>
  );
};

export default Home;
