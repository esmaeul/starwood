import { FaUsers } from "react-icons/fa";
import Reason from "./WhyUs/Reason";
import {
  FaAward,
  FaClock,
  FaHandsClapping,
  FaRegHandPeace,
  FaThumbsUp,
} from "react-icons/fa6";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us bg-globalColor4 min-h-screen py-16">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="main-heading col-span-full text-center gap-1.5">
          <h2 className="text-4xl font-semibold text-globalColor0">
            Why Choose Us
          </h2>
          <p className="font-light my-4">
            We are committed to providing the best services
          </p>
        </div>
        <Reason
          icon={<FaAward />}
          title={"Quality Assurance"}
          desc={"We ensure the highest quality standards in all our projects."}
        />
        <Reason
          icon={<FaUsers />}
          title={"Expert Team"}
          desc={"Our team consists of experienced professionals."}
        />
        <Reason
          icon={<FaClock />}
          title={"Timely Delivery"}
          desc={"We value your time and ensure timely completion of projects."}
        />
        <Reason
          icon={<FaThumbsUp />}
          title={"Customer Satisfaction"}
          desc={"Your satisfaction is our top priority."}
        />
        <Reason
          icon={<FaRegHandPeace />}
          title={"Good impacted"}
          desc={"Engineering supervision and periodic monitoring"}
        />
        <Reason
          icon={<FaHandsClapping />}
          title={"Well handled"}
          desc={"Time Availability"}
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
