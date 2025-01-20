import Feature from "./features/Feature";
import imgSrc from "../../assets/images/features/72DPIxAdobeStock_383135246-576x324.jpg";

const Features = () => {
  return (
    <div className="bg-globalColor5">
      <div className="title py-16 lg:mt-12 bg-globalColor0 bg-opacity-75">
        <div className="container section h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <Feature value={"65"} desc={"Team Members"} />
          <Feature value={"265"} desc={"Success Partners"} />
          <Feature value={"26"} desc={"Years of Experience"} />
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-6 place-items-center my-16">
        <div className="overflow-hidden md:col-span-1 col-span-full">
          <img className="h-full w-full object-cover" src={imgSrc} alt="" />
        </div>
        <div className="md:col-span-1 col-span-full">
          <img className="h-full w-full object-cover" src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
