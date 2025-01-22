import SingleDecor from "../components/sections/decors/SingleDecor";

import decorImg0 from "../assets/images/decorations/0.png";
import decorImg1 from "../assets/images/decorations/1.png";
import decorImg2 from "../assets/images/decorations/2.png";
import decorImg3 from "../assets/images/decorations/3.png";
import decorImg4 from "../assets/images/decorations/4.png";
import decorImg5 from "../assets/images/decorations/5.png";
import decorImg6 from "../assets/images/decorations/6.png";
import decorImg7 from "../assets/images/decorations/7.png";
import decorImg8 from "../assets/images/decorations/8.png";
import decorImg9 from "../assets/images/decorations/9.png";
import decorImg10 from "../assets/images/decorations/10.png";
import decorImg11 from "../assets/images/decorations/11.png";
import decorImg12 from "../assets/images/decorations/12.png";
import decorImg13 from "../assets/images/decorations/13.png";
import decorImg14 from "../assets/images/decorations/14.png";
import decorImg15 from "../assets/images/decorations/15.png";
import decorImg16 from "../assets/images/decorations/16.png";
import decorImg17 from "../assets/images/decorations/17.png";
import decorImg18 from "../assets/images/decorations/18.png";
import decorImg19 from "../assets/images/decorations/19.png";
import decorImg20 from "../assets/images/decorations/20.png";
import decorImg21 from "../assets/images/decorations/21.png";
import decorImg22 from "../assets/images/decorations/22.png";
import decorImg23 from "../assets/images/decorations/23.png";
import decorImg24 from "../assets/images/decorations/24.png";
import decorImg25 from "../assets/images/decorations/25.png";
import decorImg26 from "../assets/images/decorations/26.png";
import decorImg27 from "../assets/images/decorations/27.png";
import decorImg28 from "../assets/images/decorations/28.png";
import decorImg29 from "../assets/images/decorations/29.png";
import decorImg30 from "../assets/images/decorations/30.png";
import decorImg31 from "../assets/images/decorations/31.png";
import decorImg32 from "../assets/images/decorations/32.png";
import decorImg33 from "../assets/images/decorations/33.png";
import decorImg34 from "../assets/images/decorations/34.png";
import decorImg35 from "../assets/images/decorations/35.png";
import decorImg36 from "../assets/images/decorations/36.png";
import decorImg37 from "../assets/images/decorations/37.png";
import decorImg38 from "../assets/images/decorations/38.png";
import decorImg39 from "../assets/images/decorations/39.png";
import decorImg40 from "../assets/images/decorations/40.png";
import decorImg41 from "../assets/images/decorations/41.png";
import decorImg42 from "../assets/images/decorations/42.png";
import decorImg43 from "../assets/images/decorations/43.png";
import decorImg44 from "../assets/images/decorations/44.png";
import decorImg45 from "../assets/images/decorations/45.png";
import decorImg46 from "../assets/images/decorations/46.png";

import { useEffect } from "react";

const Decorations = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-globalColor5 py-10">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="text-4xl text-globalColor0">
            Some of Decors We Offer
          </h2>
          <p className="my-6 mx-auto w-fit font-light">
            We Provide Decors what you really need.
          </p>
        </div>
        <SingleDecor imgSrc={decorImg0} />
        <SingleDecor imgSrc={decorImg1} />
        <SingleDecor imgSrc={decorImg2} />
        <SingleDecor imgSrc={decorImg3} />
        <SingleDecor imgSrc={decorImg4} />
        <SingleDecor imgSrc={decorImg5} />
        <SingleDecor imgSrc={decorImg6} />
        <SingleDecor imgSrc={decorImg7} />
        <SingleDecor imgSrc={decorImg8} />
        <SingleDecor imgSrc={decorImg9} />
        <SingleDecor imgSrc={decorImg10} />
        <SingleDecor imgSrc={decorImg11} />
        <SingleDecor imgSrc={decorImg12} />
        <SingleDecor imgSrc={decorImg13} />
        <SingleDecor imgSrc={decorImg14} />
        <SingleDecor imgSrc={decorImg15} />
        <SingleDecor imgSrc={decorImg16} />
        <SingleDecor imgSrc={decorImg17} />
        <SingleDecor imgSrc={decorImg18} />
        <SingleDecor imgSrc={decorImg19} />
        <SingleDecor imgSrc={decorImg20} />
        <SingleDecor imgSrc={decorImg21} />
        <SingleDecor imgSrc={decorImg22} />
        <SingleDecor imgSrc={decorImg23} />
        <SingleDecor imgSrc={decorImg24} />
        <SingleDecor imgSrc={decorImg25} />
        <SingleDecor imgSrc={decorImg26} />
        <SingleDecor imgSrc={decorImg27} />
        <SingleDecor imgSrc={decorImg28} />
        <SingleDecor imgSrc={decorImg29} />
        <SingleDecor imgSrc={decorImg30} />
        <SingleDecor imgSrc={decorImg31} />
        <SingleDecor imgSrc={decorImg32} />
        <SingleDecor imgSrc={decorImg33} />
        <SingleDecor imgSrc={decorImg34} />
        <SingleDecor imgSrc={decorImg35} />
        <SingleDecor imgSrc={decorImg36} />
        <SingleDecor imgSrc={decorImg37} />
        <SingleDecor imgSrc={decorImg38} />
        <SingleDecor imgSrc={decorImg39} />
        <SingleDecor imgSrc={decorImg40} />
        <SingleDecor imgSrc={decorImg41} />
        <SingleDecor imgSrc={decorImg42} />
        <SingleDecor imgSrc={decorImg43} />
        <SingleDecor imgSrc={decorImg44} />
        <SingleDecor imgSrc={decorImg45} />
        <SingleDecor imgSrc={decorImg46} />
      </div>
    </div>
  );
};

export default Decorations;
