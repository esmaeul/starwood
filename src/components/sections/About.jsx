import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import starwoodMap from "../../../public/assets/images/woods/starwood-map.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section container flex md:flex-row flex-col gap-10 items-center justify-center">
        <div className="md:basis-6/12 md:h-full overflow-hidden relative">
          <img
            src={starwoodMap}
            alt="starwood map"
            className="max-w-full max-h-full"
          />
          <FaMapMarkerAlt className="absolute lg:top-[55%] top-[70%] animate-bounce left-[25%] text-red-600 text-3xl" />
          <FaMapMarkerAlt className="absolute lg:top-[60%] top-[70%] animate-bounce left-[27%] text-red-600 text-3xl" />
          <FaMapMarkerAlt className="absolute lg:top-[68%] top-[70%] animate-bounce left-[25%] text-red-600 text-3xl" />
          <FaMapMarkerAlt className="absolute lg:top-[54%] top-[52%] animate-bounce left-[46%] text-red-600 text-3xl" />
        </div>
        <div className="md:basis-6/12 flex flex-col gap-3">
          <p className="text-xl font-semibold text-globalColor0">
            About Company
          </p>
          <h1 className="text-xl font-semibold text-globalColor2">
            Startwood Company
          </h1>
          <p className=" font-light my-3">
            About Starwood Starwood For Decorations Starwood is a product of
            utmost quality wood, professional craftsmanship and avant-garde
            technology. It is the elite range of wood products for those who
            seek perfection. Starwood products are artistically designed,
            perfectly engineered and professionally manufactured to the specific
            requirements of the customer. The customer derives the highest value
            from Starwood in terms of quality, timeliness and service
            excellence. Professionally designed, manufactured Starwood is and
            marketed by the industry leader, Al Drees Industrial & Trading
          </p>
          <div className="flex gap-2 items-center capitalize">
            <FaCircleCheck className="text-blue-500" />
            <span>certified Company</span>
          </div>
          <Link
            to="/about"
            className="w-fit px-2 py-1.5 border border-globalColor0 text-globalColor2 hover:bg-globalColor0 hover:text-globalColor5 transition rounded-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
