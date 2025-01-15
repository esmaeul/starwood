import SingleDecor from "../components/sections/decors/SingleDecor";
import decorImg11 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_67.png";
import decorImg12 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_68.png";
import decorImg13 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_70.png";
import decorImg14 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_71.png";
import decorImg15 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_72.png";
import decorImg16 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_73.png";
import decorImg17 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_74.png";
import decorImg18 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_75.png";
import decorImg19 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_76.png";
import decorImg20 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_77.png";
import decorImg21 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_78.png";
import decorImg22 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_79.png";
import decorImg23 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_80.png";
import decorImg24 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_81.png";
import decorImg25 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_82.png";
import decorImg26 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_83.png";
import decorImg27 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_84.png";
import decorImg28 from "../assets/images/decorations/Starwood Profile_2024 Final_Page_85.png";

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
      </div>
    </div>
  );
};

export default Decorations;
