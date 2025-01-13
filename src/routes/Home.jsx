import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Feedbacks from "../components/sections/Feedbacks";
import Footer from "../components/sections/Footer";
import Landing from "../components/sections/Landing";
import Services from "../components/sections/Services";
import WhyUs from "../components/sections/WhyUs";

const Home = () => {
  return (
    <>
      {/* <!-- Start Landing --> */}
      <Landing />
      {/* <!-- End Landing --> */}
      {/* <!-- Start About --> */}
      <About />
      {/* <!-- End About --> */}
      {/* <!-- Start Services --> */}
      <Services />
      {/* <!-- End Services --> */}
      {/* <!-- Staert Why us --> */}
      <WhyUs />
      {/* <!-- End Why us --> */}
      {/* <!-- Start Feedback --> */}
      <Feedbacks />
      {/* <!-- End Feedbacks --> */}
      {/* <!-- Start Contact pre-Footer--> */}
      <Contact />
      {/* <!-- End Contact pre-Footer--> */}
      {/* <!-- Start Footer --> */}
      <Footer />
      {/* <!-- End Footer --> */}
    </>
  );
};

export default Home;
