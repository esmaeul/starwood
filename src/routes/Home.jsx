import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
// import Feedbacks from "../components/sections/Feedbacks";
import Landing from "../components/sections/Landing";
import Activities from "../components/sections/Activities";
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
      <Activities />
      {/* <!-- End Services --> */}
      {/* <!-- Staert Why us --> */}
      <WhyUs />
      {/* <!-- End Why us --> */}
      {/* <!-- Start Contact pre-Footer--> */}
      <Contact />
      {/* <!-- End Contact pre-Footer--> */}
    </>
  );
};

export default Home;
