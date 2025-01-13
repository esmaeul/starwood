import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Feedbacks from "./components/home/Feedbacks";
import Footer from "./components/home/Footer";
import Landing from "./components/home/Landing";
import Services from "./components/home/Services";
import WhyUs from "./components/home/WhyUs";
export default function AppPage() {
  
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
}
