import { FaUsers } from "react-icons/fa";
import Reason from "./WhyUs/Reason";
import {
  FaAward,
  FaClock,
  FaHandsClapping,
  FaRegHandPeace,
  FaThumbsUp,
} from "react-icons/fa6";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container section grid grid-cols-3">
        <div className="main-heading col-span-full">
          <h2>Why Choose Us do some nice colors</h2>
          <p>We are committed to providing the best services</p>
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

export default WhyUs;
