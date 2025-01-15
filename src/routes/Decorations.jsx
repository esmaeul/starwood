import SingleDecor from "../components/sections/decors/SingleDecor";

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

const Decorations = () => {
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
      </div>
    </div>
  );
};

export default Decorations;
